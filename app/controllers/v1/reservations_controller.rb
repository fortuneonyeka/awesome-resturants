class V1::ReservationsController < ApplicationController
  before_action :set_reservation, only: %i[show edit update destroy]

  # GET /reservations or /reservations.json
  def index
    @user = current_user
    @reservations = Reservation.where(user_id: @user.id)
    render json: { reservations: @reservations }, status: 200
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
    @reservation = Reservation.new(
      user_id: current_user.id,
      resturant_id: params[:resturant_id],
      start_time: params[:start_time],
      end_time: params[:end_time]
    )
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

    render json: { message: 'Reservation deleted successfully' }, status: :ok
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_reservation
    @reservation = Reservation.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  # def reservation_params
  #   params.require(:reservation).permit(:start_time, :end_time, :resturant_id)
  # end
end
