exports.default = {
  cloudinary: function(api) {
    return {
      cloud_name: 'CLOUD_NAME',
      api_key: 'API_KEY',
      api_secret: 'API_SECRET',
      cdn_subdomain: false,
      private_cdn: false,
      secure_distribution: 'SECURE_DISTRIBUTION',
      cname: 'CNAME',
      secure: false
    };
  }
};

exports.test = {
  cloudinary: function(api) {
    return {
      cloud_name: 'CLOUD_NAME',
      api_key: 'API_KEY',
      api_secret: 'API_SECRET',
      cdn_subdomain: false,
      private_cdn: false,
      secure_distribution: 'SECURE_DISTRIBUTION',
      cname: 'CNAME',
      secure: false
    };
  }
};

exports.production = {
  cloudinary: function(api) {
    return {
      cloud_name: 'CLOUD_NAME',
      api_key: 'API_KEY',
      api_secret: 'API_SECRET',
      cdn_subdomain: false,
      private_cdn: false,
      secure_distribution: 'SECURE_DISTRIBUTION',
      cname: 'CNAME',
      secure: false
    };
  }
};
