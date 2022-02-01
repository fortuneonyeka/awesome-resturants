Rails.application.routes.draw do
  
  namespace :v1, defaults: {format: 'json'} do

  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
