import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Link } from "react-router-dom";
import ActiveTab from "./ActiveTab";

export const mainListItems = (
  <>
    <Link to="/admin/dashboard">
      <ActiveTab linkTab="/admin/dashboard">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ActiveTab>
    </Link>
    <Link to="/admin/products">
      <ActiveTab linkTab="/admin/products">
        <ListItemButton>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Sản phẩm" />
        </ListItemButton>
      </ActiveTab>
    </Link>
    <Link to="/admin/orders">
      <ActiveTab linkTab="/admin/orders">
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Đơn hàng" />
        </ListItemButton>
      </ActiveTab>
    </Link>
    {/* <Link to="/admin/customers">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
    </Link> */}
    {/* <Link to="/admin/reports">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Thống kê" />
      </ListItemButton>
    </Link> */}
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Thống kê
    </ListSubheader>
    <Link to="/admin/reports/1-day">
      <ActiveTab linkTab="/admin/reports/1-day">
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Trong ngày" />
        </ListItemButton>
      </ActiveTab>
    </Link>
    <Link to="/admin/reports/7-days">
      <ActiveTab linkTab="/admin/reports/7-days">
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="7 ngày qua" />
        </ListItemButton>
      </ActiveTab>
    </Link>
    <Link to="/admin/reports/30-days">
      <ActiveTab linkTab="/admin/reports/30-days">
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="30 ngày qua" />
        </ListItemButton>
      </ActiveTab>
    </Link>
  </>
);
