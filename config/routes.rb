Rails.application.routes.draw do
  
  namespace :v1, defaults: {format: 'json'} do
    resources :users, only: [:create] 
    delete "/logout", to: "users#logout", as: :user_logout
  end

  post 'auth/login', to: 'authentication#authenticate'
end
