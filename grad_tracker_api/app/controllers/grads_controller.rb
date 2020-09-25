class GradsController < ApplicationController
  before_action :set_grad, only: [:show, :update, :destroy]

  # GET /grads
  def index
    @grads = Grad.all

    render json: @grads
  end

  # GET /grads/1
  def show
    render json: @grad
  end

  # POST /grads
  def create
    @grad = Grad.new(grad_params)

    if @grad.save
      render json: @grad, status: :created, location: @grad
    else
      render json: @grad.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /grads/1
  def update
    if @grad.update(grad_params)
      render json: @grad
    else
      render json: @grad.errors, status: :unprocessable_entity
    end
  end

  # DELETE /grads/1
  def destroy
    @grad.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grad
      @grad = Grad.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def grad_params
      params.require(:grad).permit(:name, :degree, :grad_date, :school)
    end
end
