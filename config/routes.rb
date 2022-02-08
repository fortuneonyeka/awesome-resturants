Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    post 'auth/login', to: 'authentication#authenticate'
    post 'signup', to: 'users#create'

    resources 'restaurants', only: [ :index, :show ]

    resources :reservations

  end
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index';
end


