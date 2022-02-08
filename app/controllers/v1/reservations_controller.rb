class V1::ReservationsController < ApplicationController
  before_action :set_reservation, only: %i[show edit update destroy]

  # GET /reservations or /reservations.json
  def index
    @user = current_user
    @reservations = Reservation.where(user_id: @user.id)
    render json: { reservations:@reservations }, status: 200
  end

  # GET /reservations/1 or /reservations/1.json
  def show; end

  # GET /reservations/new
  def new
    @reservation = Reservation.new
  end

  # GET /reservations/1/edit
  def edit
    @reservation = Reservation.find(params[:id])
  end

  # POST /reservations or /reservations.json
  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render json: { message: 'Reservation created successfully' }, status: :created
    else
      render json: { errors: @reservation.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservations/1 or /reservations/1.json
  def update
    respond_to do |_format|
      if @reservation.update(reservation_params)
        render json: { message: 'Reservation was successfully updated.' }, status: :ok
      else
        render json: { errors: @reservation.errors }, status: :unprocessable_entity
      end
    end
  end

  # DELETE /reservations/1 or /reservations/1.json
  def destroy
    @reservation.destroy
    respond_to do |_format|
      render json: { message: 'Reservation deleted successfully' }, status: :ok
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_reservation
    @reservation = Reservation.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def reservation_params
    params.require(:reservation).permit(:name, :start_time, :end_time, :user_id)
  end
end
