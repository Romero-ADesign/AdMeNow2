require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AdMeNow
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
    config.assets.paths << Rails.root.join('frontend', 'src')
    # Configuration for the application, engines, and railties goes here.
    config.action_controller.default_url_options = { host: 'localhost', port: 3000 }
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'localhost:3001'
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
