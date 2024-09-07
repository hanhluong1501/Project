import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import Layout from "components/common/Layout/Layout";

const BlurredBackgroundPaper = styled(Paper)(({ theme }) => ({
  py: 5,
  px: 3,
  backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
  textAlign: "center",
  mb: 5,
  position: "relative",
  backgroundImage: `url('/assets/images/login.webp')`, // Replace with your image path
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(0.5px)", // Adjust the blur effect
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black overlay
    zIndex: 1,
  },
  "& *": {
    zIndex: 2, // Ensure text is above the overlay
    color: "#fff", // Text color
  },
}));

const brandInfo = {
  name: "Beauty Garden",
  slogan: "Where Beauty Garden Blossoms",
  about:
    "Tại Beauty Garden, chúng tôi đang trên một sứ mệnh để giải phóng sức mạnh của vẻ đẹp. Mục tiêu của chúng tôi là định nghĩa lại các tiêu chuẩn vẻ đẹp và truyền cảm hứng cho mọi người để họ có thể yêu thương bản thân mình một cách duyên dáng và đặc biệt.",
  story:
    "Tại một ngôi làng xinh đẹp, nơi thiên nhiên hòa quyện với vẻ đẹp của cuộc sống hàng ngày, có một khu vườn kỳ diệu mang tên Beauty Garden Đây không chỉ là một khu vườn bình thường, mà là một nơi mà những loại cây cỏ quý hiếm và thảo dược độc quyền được chăm sóc và bảo vệ để tạo ra những sản phẩm làm đẹp tuyệt vời. Câu chuyện bắt đầu khi Emma, một nhà thảo dược học đam mê làm đẹp và chăm sóc sức khỏe, phát hiện ra khu vườn cổ xưa này trong một chuyến đi khám phá. Khu vườn này từng là nơi bí mật của một gia đình hoàng gia, nổi tiếng với những phương pháp làm đẹp truyền thống được lưu truyền qua nhiều thế hệ. Emma quyết định phục hồi khu vườn và mang lại sự tinh túy của nó cho thế giới hiện đại.Beauty Garden ra đời với sứ mệnh mang lại cho mọi người những sản phẩm làm đẹp tự nhiên và an toàn nhất, kết hợp giữa sự tinh túy của thiên nhiên và công nghệ hiện đại. Từ những loại mặt nạ dưỡng da đến các sản phẩm chăm sóc tóc, tất cả đều được chiết xuất từ các thảo dược quý giá và được tạo ra với sự tôn trọng đối với môi trường.Beauty Garden không chỉ là một thương hiệu mỹ phẩm, mà là một cộng đồng đam mê làm đẹp một cách bền vững và tự nhiên. Chúng tôi tin rằng mỗi sản phẩm không chỉ làm đẹp cho ngoại hình mà còn mang lại cảm giác thư giãn và hạnh phúc. Chúng tôi cam kết sử dụng các nguyên liệu thân thiện với môi trường và thực hiện quy trình sản xuất bền vững. Với tầm nhìn dài hạn, Beauty Garden hướng tới việc mở rộng ảnh hưởng toàn cầu, đồng thời duy trì cam kết về chất lượng và bền vững. Chúng tôi mong muốn tạo ra nhiều cơ hội cho cộng đồng yêu thích làm đẹp tự nhiên và tiếp tục khám phá những bí mật kỳ diệu của khu vườn cổ xưa.",
  brandImages: [
    "/assets/images/homepage/hero-1.webp",
    "/assets/images/homepage/hero-2.webp",
    "/assets/images/homepage/hero-3.webp",
  ],
};

const OurBrandPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Breadcrumb current="Giới thiệu" />
        {/* BlurredBackgroundPaper with enhanced typography and animation */}
        <BlurredBackgroundPaper elevation={0}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            {brandInfo.name}
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            {brandInfo.slogan}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {brandInfo.about}
          </Typography>
        </BlurredBackgroundPaper>

        {/* Updated Paper components with enhanced styles */}
        <Paper elevation={0} sx={{ backgroundColor: "#f8f8f8", py: 5 }}>
          <Container>
            <Typography
              variant="h3"
              sx={{ mb: 4, textAlign: "center", color: "#4caf50" }}
            >
              Câu Chuyện Của Chúng Tôi
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#777",
                maxWidth: 800,
                mx: "auto",
              }}
            >
              {brandInfo.story}
            </Typography>
          </Container>
        </Paper>

        <Paper elevation={0} sx={{ backgroundColor: "#fff", py: 5 }}>
          <Container>
            {/* Enhanced heading style for "Brand Images" */}
            <Typography
              variant="h3"
              sx={{ mb: 4, textAlign: "center", color: "#ff4081" }}
            >
              Khám Phá Vẻ Đẹp
            </Typography>
            {/* Updated Grid and Card components for a more aesthetic look */}
            <Grid container spacing={3}>
              {brandInfo.brandImages.map((image, index) => (
                <Grid item key={index} xs={12} md={4}>
                  <Card
                    sx={{
                      borderRadius: 12,
                      overflow: "hidden",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={image}
                      alt={`Brand Image ${index + 1}`}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Paper>
      </Container>
    </Layout>
  );
};

export default OurBrandPage;
