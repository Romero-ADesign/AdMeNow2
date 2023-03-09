Rails.application.routes.draw do
  resources :tags
  resources :ads
  resources :users
  get '/api/sample_data', to: 'api#sample_data'
end
