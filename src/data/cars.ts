export type ServiceType =
  | "duong-dai"
  | "trong-thanh-pho"
  | "san-bay"
  | "tu-lai"
  | "co-tai-xe"
  | "du-lich-su-kien"
  | "cuoi-hoi";

export type Car = {
  slug: string;
  name: string;
  category: string;
  serviceType: ServiceType;
  seats: number;
  transmission: string;
  fuel: string;
  pricePerDay: number;
  description: string;
};

export const cars: Car[] = [
  { slug: "ford-everest-titanium-2024", name: "Ford Everest Titanium 2024", category: "SUV", serviceType: "duong-dai", seats: 7, transmission: "Số tự động", fuel: "Dầu", pricePerDay: 1800000, description: "SUV rộng rãi, vận hành ổn định cho công tác và hành trình liên tỉnh." },
  { slug: "toyota-fortuner-2023", name: "Toyota Fortuner 2023", category: "SUV", serviceType: "duong-dai", seats: 7, transmission: "Số tự động", fuel: "Dầu", pricePerDay: 1700000, description: "Khoang xe thoải mái và sức chứa tốt cho chuyến đi nhiều ngày." },
  { slug: "hyundai-santa-fe-2024", name: "Hyundai Santa Fe 2024", category: "SUV", serviceType: "duong-dai", seats: 7, transmission: "Số tự động", fuel: "Dầu", pricePerDay: 1900000, description: "Tiện nghi cao cấp, phù hợp gia đình đi du lịch đường dài." },

  { slug: "toyota-vios-2024", name: "Toyota Vios 2024", category: "Sedan", serviceType: "trong-thanh-pho", seats: 5, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 800000, description: "Sedan gọn gàng, tiết kiệm và linh hoạt trong thành phố." },
  { slug: "honda-city-2024", name: "Honda City 2024", category: "Sedan", serviceType: "trong-thanh-pho", seats: 5, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 850000, description: "Không gian thoải mái cho lịch họp, gặp khách hàng và mua sắm." },
  { slug: "mazda-3-2023", name: "Mazda 3 2023", category: "Sedan", serviceType: "trong-thanh-pho", seats: 5, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 950000, description: "Thiết kế thanh lịch, phù hợp công việc và tham quan nội thành." },

  { slug: "toyota-camry-2024", name: "Toyota Camry 2024", category: "Sedan cao cấp", serviceType: "san-bay", seats: 5, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 1600000, description: "Đón tiễn sân bay lịch sự dành cho khách hàng và đối tác." },
  { slug: "kia-carnival-2024", name: "Kia Carnival 2024", category: "MPV cao cấp", serviceType: "san-bay", seats: 7, transmission: "Số tự động", fuel: "Dầu", pricePerDay: 2200000, description: "Khoang hành lý lớn cho gia đình hoặc nhóm khách nhiều hành lý." },
  { slug: "hyundai-staria-2023", name: "Hyundai Staria 2023", category: "MPV", serviceType: "san-bay", seats: 9, transmission: "Số tự động", fuel: "Dầu", pricePerDay: 2300000, description: "Không gian rộng cho đoàn khách từ sân bay về khách sạn hoặc đi tỉnh." },

  { slug: "kia-seltos-2024", name: "Kia Seltos 2024", category: "SUV", serviceType: "tu-lai", seats: 5, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 1100000, description: "SUV linh hoạt, dễ điều khiển cho nhu cầu thuê tự lái." },
  { slug: "mitsubishi-xpander-2024", name: "Mitsubishi Xpander 2024", category: "MPV", serviceType: "tu-lai", seats: 7, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 1200000, description: "Xe 7 chỗ rộng rãi dành cho gia đình hoặc nhóm bạn." },
  { slug: "vinfast-vf-6-2024", name: "VinFast VF 6 2024", category: "SUV điện", serviceType: "tu-lai", seats: 5, transmission: "Số tự động", fuel: "Điện", pricePerDay: 1300000, description: "Xe điện hiện đại cho trải nghiệm tự lái êm ái và tiết kiệm." },

  { slug: "mercedes-e200-2023", name: "Mercedes-Benz E200 2023", category: "Sedan hạng sang", serviceType: "co-tai-xe", seats: 5, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 3500000, description: "Xe hạng sang kèm tài xế cho khách VIP và lãnh đạo doanh nghiệp." },
  { slug: "toyota-alphard-2023", name: "Toyota Alphard 2023", category: "MPV hạng sang", serviceType: "co-tai-xe", seats: 7, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 5000000, description: "Khoang hành khách cao cấp cùng tài xế chuyên nghiệp." },
  { slug: "lexus-lm350h-2024", name: "Lexus LM 350h 2024", category: "MPV hạng sang", serviceType: "co-tai-xe", seats: 7, transmission: "Số tự động", fuel: "Hybrid", pricePerDay: 6500000, description: "Dịch vụ cao cấp dành cho cá nhân, gia đình và khách quan trọng." },

  { slug: "ford-transit-2024", name: "Ford Transit 2024", category: "Minibus", serviceType: "du-lich-su-kien", seats: 16, transmission: "Số sàn", fuel: "Dầu", pricePerDay: 2500000, description: "Phù hợp tour, picnic, hội nghị và đưa đón nhân viên." },
  { slug: "hyundai-solati-2023", name: "Hyundai Solati 2023", category: "Minibus", serviceType: "du-lich-su-kien", seats: 16, transmission: "Số sàn", fuel: "Dầu", pricePerDay: 2800000, description: "Khoang rộng, tiện nghi cho đoàn khách và team building." },
  { slug: "thaco-bluesky-2023", name: "Thaco Bluesky 2023", category: "Xe khách", serviceType: "du-lich-su-kien", seats: 29, transmission: "Số sàn", fuel: "Dầu", pricePerDay: 4200000, description: "Giải pháp vận chuyển đoàn đông người cho sự kiện và lễ hội." },

  { slug: "mercedes-c200-wedding", name: "Mercedes-Benz C200", category: "Xe hoa", serviceType: "cuoi-hoi", seats: 5, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 3800000, description: "Sedan sang trọng trang trí hoa cho cô dâu chú rể." },
  { slug: "bmw-520i-wedding", name: "BMW 520i", category: "Xe hoa", serviceType: "cuoi-hoi", seats: 5, transmission: "Số tự động", fuel: "Xăng", pricePerDay: 4200000, description: "Phong cách hiện đại cho ngày cưới và lễ đón dâu." },
  { slug: "kia-carnival-wedding", name: "Kia Carnival Premium", category: "Xe đưa đón", serviceType: "cuoi-hoi", seats: 7, transmission: "Số tự động", fuel: "Dầu", pricePerDay: 2400000, description: "Xe rộng rãi đưa đón gia đình và khách dự tiệc cưới." },
];

export function getCarBySlug(slug: string) { return cars.find((car) => car.slug === slug); }
export function formatPrice(value: number) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(value);
}
