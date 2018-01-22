Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resource :user, only: %i(edit update)
  resources :users, only: %i(index edit update)
  resources :groups, only: %i(new create edit update)
end
