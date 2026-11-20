export interface NavItem {
  label: string;
  href: string;
  description: string;
}

export interface ProductAudienceCard {
  audience: string;
  title: string;
  description: string;
  badge?: string;
  featured?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  quote: string;
  avatarInitials: string;
  department: string;
}

export interface NewsArticle {
  category: 'Thông cáo báo chí' | 'Góc nhìn' | 'Sự kiện';
  date: string;
  title: string;
  summary: string;
  slug: string;
}

export interface CommitmentItem {
  title: string;
  description: string;
  metric: string;
}

export const siteConfig = {
  companyName: 'Hearth',
  legalCompanyName: 'Công ty Cổ phần Công nghệ Bất động sản Hearth Việt Nam',
  businessRegistrationNumber: '[MSDN: Đang cập nhật]',
  address: '[Địa chỉ văn phòng, TP. Hồ Chí Minh, Việt Nam]',
  contactEmail: 'contact@hearth.vn',
  product: {
    name: 'Homers',
    tagline: 'Ứng dụng & Website tìm nhà minh bạch',
    url: 'https://property-marketplace-website.vercel.app/',
    logoPath: '/images/homers-logo.png',
    focusArea: 'Thuê & mua bán bất động sản xác minh tại Việt Nam',
  },
  seo: {
    title: 'Hearth – Đồng hành cùng mọi tổ ấm',
    description:
      'Hearth kết nối người tìm nhà, chủ nhà và môi giới qua sản phẩm Homers bằng tin đăng được xác minh, giúp việc thuê, mua, bán nhà minh bạch và nhanh hơn.',
  },
  navItems: [
    {
      label: 'Về chúng tôi',
      href: '#ve-chung-toi',
      description: 'Câu chuyện, sứ mệnh, giá trị',
    },
    {
      label: 'Sản phẩm',
      href: '#san-pham',
      description: 'Ứng dụng và website Homers cho người tìm nhà, chủ nhà, môi giới',
    },
    {
      label: 'Cộng đồng',
      href: '#tac-dong',
      description: 'Hoạt động vì cộng đồng và báo cáo tác động',
    },
    {
      label: 'Tin tức',
      href: '#tin-tuc',
      description: 'Thông cáo báo chí, bài viết, sự kiện',
    },
    {
      label: 'Liên hệ',
      href: '#lien-he',
      description: 'Biểu mẫu và thông tin hợp tác',
    },
  ] satisfies NavItem[],
  hero: {
    headline: 'Đồng hành cùng mọi tổ ấm',
    subheadline:
      'Chúng tôi xây dựng một hệ sinh thái phục vụ các nhu cầu xoay quanh tổ ấm của người Việt',
    alternativeHeadlines: [
      'Tìm nhà dễ hơn, chọn nhà tự tin hơn',
      'Bất động sản rõ ràng, giao dịch an tâm',
      'Nơi tin đăng thật gặp người cần thật',
    ],
    primaryCta: {
      label: 'Khám phá sản phẩm',
      href: '#san-pham',
    },
    secondaryCta: {
      label: 'Tham gia cùng chúng tôi',
      href: '#lien-he',
    },
  },
  productSection: {
    eyebrow: 'HỆ SINH THÁI SẢN PHẨM',
    headline: 'Đổi mới để mọi giao dịch bất động sản đơn giản hơn',
    description:
      'Chúng tôi xây dựng sản phẩm Homers cho người tìm nhà, chủ nhà và môi giới, để mỗi bên đều tìm thấy điều họ cần nhanh và tin tưởng được.',
    audiences: [
      {
        audience: 'Người tìm nhà',
        title: 'Tìm đúng nhà, bớt mất thời gian',
        description:
          'Tin đăng được kiểm duyệt bằng AI, lọc theo khu vực, giá, diện tích, liên hệ chủ tin chỉ với vài chạm.',
        badge: 'Tìm kiếm xác minh',
      },
      {
        audience: 'Chủ nhà',
        title: 'Đăng tin trong vài phút',
        description:
          'Đăng từ điện thoại, tự động kiểm tra tin trùng và nội dung sai, theo dõi lượt xem và liên hệ.',
        badge: 'Kiểm duyệt tự động',
      },
      {
        audience: 'Môi giới',
        title: 'Công cụ quản lý tin và khách',
        description:
          'Trang cá nhân, quản lý nhiều tin cùng lúc, thống kê hiệu quả, chia sẻ tin qua Zalo và Facebook.',
        badge: 'Homers Pro',
        featured: true,
      },
      {
        audience: 'Doanh nghiệp',
        title: 'Tiếp cận đúng khách hàng',
        description:
          'Giải pháp phân phối và truyền thông chuyên biệt cho chủ đầu tư, sàn giao dịch và đơn vị vận hành cho thuê.',
        badge: 'B2B Solutions',
        featured: true,
      },
    ] satisfies ProductAudienceCard[],
    secondaryLinks: [
      { label: 'Tải ứng dụng Homers', href: 'https://property-marketplace-website.vercel.app/' },
      { label: 'Truy cập website Homers', href: 'https://property-marketplace-website.vercel.app/' },
      { label: 'Đăng tin miễn phí', href: 'https://property-marketplace-website.vercel.app/' },
    ],
  },
  statsSection: {
    eyebrow: 'THƯỚC ĐO CHẤT LƯỢNG & QUY MÔ',
    headline: 'Con số nói lên điều chúng tôi đang xây dựng',
    note: 'Số liệu trong ngoặc vuông [ ] có thể cập nhật trực tiếp tại src/data/siteContent.ts với chỉ số vận hành thực tế của Hearth.',
    stats: [
      {
        value: '[100%]',
        label: 'Tin đăng đang hoạt động qua kiểm duyệt AI',
        note: 'Thay bằng [X]+ tin đăng đang hoạt động hoặc tỷ lệ tin xác minh',
      },
      {
        value: '[X]+',
        label: 'Người dùng mỗi tháng trên Homers',
        note: 'Lượng người tìm nhà thực tế truy cập hàng tháng',
      },
      {
        value: '[X]+',
        label: 'Môi giới và chủ nhà đối tác',
        note: 'Đối tác đã xác thực danh tính và nguồn nhà',
      },
      {
        value: '[< 15 phút]',
        label: 'Khu vực phủ sóng & thời gian phản hồi trung bình',
        note: 'Hoặc điền [X] Tỉnh/thành đang hoạt động (VD: TP.HCM, Hà Nội, Đà Nẵng)',
      },
    ] satisfies StatItem[],
  },
  teamSection: {
    eyebrow: 'CON NGƯỜI & VĂN HÓA TẠI HEARTH',
    headline: 'Chúng tôi là những con người đam mê, cùng làm mới cách người Việt tìm một mái nhà',
    description:
      'Mỗi thành viên của Hearth đều có một lý do riêng để làm việc này. Gặp gỡ những người đang xây dựng sản phẩm Homers mỗi ngày.',
    members: [
      {
        name: '[Họ tên · Quốc]',
        role: 'Founder & Product Lead',
        quote:
          'Tôi bắt đầu Hearth vì tin rằng mỗi người Việt đều xứng đáng tìm được tổ ấm mà không phải lo lắng về tin ảo hay giá mập mờ.',
        avatarInitials: 'Q',
        department: 'Ban điều hành & Sản phẩm',
      },
      {
        name: '[Họ tên thành viên 2]',
        role: 'Head of Engineering & AI',
        quote:
          'Xây dựng hệ thống kiểm duyệt bằng AI giúp lọc bỏ tin trùng và thông tin sai lệch trước khi người tìm nhà kịp mất thời gian.',
        avatarInitials: 'EN',
        department: 'Kỹ thuật & Dữ liệu',
      },
      {
        name: '[Họ tên thành viên 3]',
        role: 'Lead Product Designer',
        quote:
          'Một giao diện rõ ràng, ấm áp và trung thực là cách nhanh nhất để tạo dựng niềm tin giữa chủ nhà, môi giới và người thuê.',
        avatarInitials: 'PD',
        department: 'Thiết kế trải nghiệm',
      },
      {
        name: '[Họ tên thành viên 4]',
        role: 'Head of Community & Partner Success',
        quote:
          'Khi môi giới chân chính có công cụ tốt, toàn bộ thị trường bất động sản sẽ trở nên lành mạnh và minh bạch hơn.',
        avatarInitials: 'CS',
        department: 'Phát triển đối tác',
      },
    ] satisfies TeamMember[],
    cta: {
      label: 'Khám phá cơ hội nghề nghiệp',
      href: '#lien-he',
    },
  },
  newsSection: {
    eyebrow: 'TIN TỨC & CẬP NHẬT',
    headline: 'Điều gì đang diễn ra tại Hearth?',
    articles: [
      {
        category: 'Thông cáo báo chí',
        date: '03 Th11, 2026',
        title: 'Hearth chính thức ra mắt nền tảng Homers – Chuẩn mực mới cho tin đăng xác minh',
        summary:
          'Ứng dụng và website Homers giúp kết nối trực tiếp người tìm nhà với chủ nhà và môi giới uy tín, loại bỏ hoàn toàn tin đăng ảo.',
        slug: 'https://property-marketplace-website.vercel.app/',
      },
      {
        category: 'Góc nhìn',
        date: '28 Th10, 2026',
        title: 'Vì sao tin đăng được xác minh quan trọng với người thuê nhà tại đô thị lớn?',
        summary:
          'Phân tích chi phí thời gian và tâm lý khi người đi thuê phải đối mặt với hình ảnh sai thực tế, cùng cách AI của Homers giải quyết bài toán này.',
        slug: '#tin-tuc',
      },
      {
        category: 'Sự kiện',
        date: '15 Th10, 2026',
        title: 'Hearth đồng hành cùng cộng đồng môi giới chuyên nghiệp chuyển đổi số 2026',
        summary:
          'Chuỗi workshop chia sẻ bộ công cụ quản lý giỏ hàng, tối ưu hiệu quả tiếp cận khách hàng thật qua Zalo và Facebook trên Homers.',
        slug: '#tin-tuc',
      },
    ] satisfies NewsArticle[],
    cta: {
      label: 'Xem tất cả tin tức',
      href: '#tin-tuc',
    },
  },
  impactSection: {
    eyebrow: 'TÁC ĐỘNG & TRÁCH NHIỆM CỘNG ĐỒNG',
    headline: 'Hoạt động vì mục đích, đo bằng tác động thật',
    description:
      'Chúng tôi dùng công nghệ và dữ liệu để giúp việc tìm nhà an toàn, minh bạch và công bằng hơn cho cộng đồng.',
    commitments: [
      {
        title: 'Minh bạch',
        description:
          'Mọi tin đăng trên Homers đều qua quy trình kiểm duyệt đa lớp trước khi hiển thị công khai tới người tìm nhà.',
        metric: 'Kiểm duyệt 100% tin hiển thị',
      },
      {
        title: 'An toàn',
        description:
          'Chủ động nhận diện và loại bỏ tin lừa đảo, tin trùng lặp, hình ảnh cắt ghép hoặc thông tin giá sai lệch.',
        metric: 'Chống tin ảo & trùng lặp bằng AI',
      },
      {
        title: 'Tiếp cận',
        description:
          'Hỗ trợ bộ lọc nhà trọ, căn hộ dịch vụ và phòng thuê xác minh dành cho sinh viên, người lao động xa quê và người thu nhập trung bình - thấp.',
        metric: 'An cư dễ tiếp cận cho mọi người',
      },
    ] satisfies CommitmentItem[],
    cta: {
      label: 'Tìm hiểu thêm về cam kết của chúng tôi',
      href: '#lien-he',
    },
  },
  finalCta: {
    headline: 'Cùng chúng tôi làm cho việc tìm nhà trở nên đáng tin cậy',
    description:
      'Dù bạn đang tìm nhà, có nhà để cho thuê hay là một môi giới chuyên nghiệp, Hearth và sản phẩm Homers luôn có chỗ cho bạn.',
    buttons: [
      {
        label: 'Truy cập Homers ngay',
        href: 'https://property-marketplace-website.vercel.app/',
        variant: 'primary',
      },
      {
        label: 'Đăng tin miễn phí',
        href: 'https://property-marketplace-website.vercel.app/',
        variant: 'secondary',
      },
      {
        label: 'Liên hệ hợp tác',
        href: '#lien-he',
        variant: 'tertiary',
      },
    ],
  },
  footer: {
    columns: [
      {
        title: 'Công ty',
        links: [
          { label: 'Về chúng tôi', href: '#ve-chung-toi' },
          { label: 'Sản phẩm Homers', href: '#san-pham' },
          { label: 'Cộng đồng', href: '#tac-dong' },
          { label: 'Tin tức', href: '#tin-tuc' },
          { label: 'Liên hệ', href: '#lien-he' },
        ],
      },
      {
        title: 'Sản phẩm',
        links: [
          {
            label: 'Homers cho người tìm nhà',
            href: 'https://property-marketplace-website.vercel.app/',
            external: true,
          },
          {
            label: 'Công cụ cho môi giới',
            href: 'https://property-marketplace-website.vercel.app/',
            external: true,
          },
          {
            label: 'Đăng tin cho chủ nhà',
            href: 'https://property-marketplace-website.vercel.app/',
            external: true,
          },
        ],
      },
      {
        title: 'Dành cho doanh nghiệp',
        links: [
          { label: 'Giải pháp cho chủ đầu tư', href: '#lien-he' },
          { label: 'Hợp tác quảng cáo', href: '#lien-he' },
          { label: 'Liên hệ kinh doanh', href: '#lien-he' },
        ],
      },
      {
        title: 'Kết nối',
        links: [
          { label: 'LinkedIn', href: '#footer' },
          { label: 'Facebook', href: '#footer' },
          { label: 'YouTube', href: '#footer' },
          { label: 'Zalo OA', href: '#footer' },
          { label: 'Blog kỹ thuật', href: '#tin-tuc' },
        ],
      },
    ],
    legalLinks: [
      { label: 'Điều khoản sử dụng', href: '#footer' },
      { label: 'Chính sách bảo mật', href: '#footer' },
      { label: 'Quy chế hoạt động', href: '#footer' },
    ],
  },
};

