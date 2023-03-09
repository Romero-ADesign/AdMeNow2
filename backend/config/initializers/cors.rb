Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost:3001' # Replace with the URL of your React app
      resource '*', headers: :any, methods: [:get, :post, :put, :delete, :options]
    end
  end