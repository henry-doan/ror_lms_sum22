Rails.application.routes.draw do
  
  namespace :api do
    resources :courses do 
      resources :enrollments 
      get '/unenrolled', to: 'enrollments#unenrolledUsers'
      get '/enrolled', to: 'enrollments#enrolledUsers'
    end

    resources :users 
  end
  
end
