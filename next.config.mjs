import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

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
  webpack: (config, { isServer }) => {
    // Handle .jfif files
    config.module.rules.push({
      test: /\.jfif$/,
      type: "asset/resource",
    });

    // Fix for Node.js modules in browser context
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
};
export default withNextIntl(nextConfig);
