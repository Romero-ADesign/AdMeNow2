Rails.application.routes.draw do
  resources :tags, only: [:index, :show, :create]
  resources :ads, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create]
  get '/*path' => 'pages#index'
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
