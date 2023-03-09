Rails.application.routes.draw do
  get '/api/sample_data', to: 'api#sample_data'
end
