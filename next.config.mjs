/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.jfif": {
          loaders: ["file-loader"],
          as: "*.jfif",
        },
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jfif$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
