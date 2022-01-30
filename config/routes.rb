Rails.application.routes.draw do
  
  namespace :v1, defaults: {format: 'json'} do
    resources :users, only: [:create] 
    get "/login", to: "users#login", as: :user_login
    delete "/logout", to: "users#logout", as: :user_logout
  end

end
