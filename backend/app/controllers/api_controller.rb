class ApiController < ApplicationController
    def sample_data
        render json: { message: "Hello from Rails!" }
    end
end
