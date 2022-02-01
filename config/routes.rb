Rails.application.routes.draw do
 
  namespace :v1, defaults: {format: 'json'} do

  end


  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'

  resources :reservations
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


end
