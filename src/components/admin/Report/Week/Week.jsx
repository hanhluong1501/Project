import { useTheme } from "@mui/material/styles";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
// import Title from "../Title/Title";
import { Box, Tooltip } from "@mui/material";
import Title from "components/admin/Dashboard/Title/Title";
import Loading from "components/common/Loading/Loading";
import { useEffect, useMemo, useState } from "react";
import { getOrders } from "server/firebase/firestore/orders";
import { showErrorToast } from "utils/showToasts";
import {
  convertDateToString,
  formatYAxisTick,
  isDateLessThanOrEqual,
  subtractDays,
} from "utils/time";

// Modify createData to use actual date with rounded hours
function createDataWithDate(date, amount) {
  const time = convertDateToString(new Date(date), true);
  return { time, amount };
}

export default function Week() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setOrders(await getOrders());
      } catch (err) {
        showErrorToast(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const lastSevenDay = useMemo(() => {
    return subtractDays(selectedDate, 6);
  }, [selectedDate]);

  const lastSevenDayOrders = useMemo(() => {
    return orders.filter((order) => {
      const orderDate = order.orderDate?.toDate();
      return (
        orderDate >= lastSevenDay &&
        isDateLessThanOrEqual(orderDate, selectedDate)
      );
    });
  }, [lastSevenDay, orders, selectedDate]);

  // Generate data for the chart
  const chartData = useMemo(() => {
    return lastSevenDayOrders.map((order) =>
      createDataWithDate(order.orderDate.toDate(), order.totalPrice)
    );
  }, [lastSevenDayOrders]);

  return (
    <>
      {loading && <Loading />}
      <Box ml={4} mb={2}>
        <Title>Doanh thu trong 7 ngày qua</Title>
      </Box>
      <Box ml={4} mb={1}>
        <h3>
          {`Lọc theo ngày (từ ngày ${convertDateToString(
            lastSevenDay,
            true
          )} đến 
          ${convertDateToString(selectedDate, true)})`}
        </h3>
      </Box>
      <input
        type="date"
        className="is-hover"
        value={convertDateToString(selectedDate)}
        style={{
          marginLeft: "32px",
          marginBottom: "16px",
          padding: "6px",
          borderRadius: "8px",
          borderColor: "#BEBEBE",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        onChange={(e) => setSelectedDate(new Date(e.target.value))}
      />
      <ResponsiveContainer
        width="70%"
        height="70%"
        style={{
          marginInline: "auto",
        }}
      >
        {chartData.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <p>Không có dữ liệu</p>
          </Box>
        ) : (
          <LineChart
            data={chartData}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 124,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" domain={["auto", "auto"]} />
            <YAxis domain={["auto", "auto"]} tickFormatter={formatYAxisTick}>
              <Label
                angle={270}
                position="left"
                offset={55}
                style={{
                  textAnchor: "middle",
                  fill: theme.palette.text.primary,
                  ...theme.typography.body1,
                }}
              >
                Doanh số (đ)
              </Label>
            </YAxis>
            <Tooltip />
            <Legend />
            <Line
              isAnimationActive={false}
              type="monotone"
              dataKey="amount"
              stroke={theme.palette.primary.main}
              dot={false}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </>
  );
}
