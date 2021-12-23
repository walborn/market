module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/goods',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://aroma-vest.prj.yandex-academy.ru/api/v1/:path*',
      },
    ]
  },
};
