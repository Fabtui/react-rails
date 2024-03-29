Rails.application.routes.draw do
  root to: 'pages#home'

  get "posts/new", to: 'pages#home'
  get "/posts/:id", to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # API
  namespace :api, default: { format: :json } do
    namespace :v1 do
      resources :posts, only: [ :index, :show, :create ]
    end
  end
end
