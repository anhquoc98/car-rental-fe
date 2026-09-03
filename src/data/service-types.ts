import type { ServiceType } from "@/data/cars";

export type RentalService = {
  id: ServiceType;
  name: string;
  shortName: string;
  description: string;
};

export const rentalServices: RentalService[] = [
  { id: "duong-dai", name: "Cho thuê xe đi tỉnh / đường dài", shortName: "Xe đi tỉnh", description: "Đi công tác, du lịch, về quê, đi tỉnh trong ngày hoặc nhiều ngày." },
  { id: "trong-thanh-pho", name: "Cho thuê xe trong thành phố", shortName: "Xe nội thành", description: "Đi họp, gặp khách hàng, tham quan, mua sắm, đưa đón theo giờ hoặc ngày." },
  { id: "san-bay", name: "Cho thuê xe đưa đón sân bay", shortName: "Đưa đón sân bay", description: "Đón sân bay, tiễn sân bay, đưa khách từ sân bay về khách sạn hoặc các tỉnh." },
  { id: "tu-lai", name: "Cho thuê xe tự lái", shortName: "Xe tự lái", description: "Thuê xe 4 chỗ, 5 chỗ, 7 chỗ theo ngày, tuần hoặc tháng." },
  { id: "co-tai-xe", name: "Cho thuê xe có tài xế", shortName: "Xe có tài xế", description: "Thuê xe kèm tài xế phục vụ cá nhân, gia đình, doanh nghiệp và khách VIP." },
  { id: "du-lich-su-kien", name: "Cho thuê xe du lịch / sự kiện", shortName: "Du lịch & sự kiện", description: "Đi tour, picnic, lễ hội, hội nghị, team building hoặc đưa đón đoàn khách." },
  { id: "cuoi-hoi", name: "Cho thuê xe cưới hỏi", shortName: "Xe cưới hỏi", description: "Xe hoa, xe đưa đón cô dâu chú rể, gia đình và khách dự tiệc." },
];
