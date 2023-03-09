Rails.application.routes.draw do
  resources :tags, only: [:index, :show, :create]
  resources :ads, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create]
  get '/*path' => 'pages#index'
end
