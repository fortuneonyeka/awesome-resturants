class ReservationsController < ApplicationController
  before_action :set_reservation, only: %i[show edit update destroy]


  # GET /reservations or /reservations.json
  def index
  @user = current_user
  @reservations = Reservation.where(user_id: @user.id)
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
         render json: status: :created, notice: "Reservation successfully created"  
        else 
          render json:  @reservation.errors, status: :unprocessable_entity , notice: 'Reservation not created'
        end
  end

  # PATCH/PUT /reservations/1 or /reservations/1.json
  def update
    respond_to do |format|
      if @reservation.update(reservation_params)
        render json:  status: :ok, notice: 'Reservation was successfully updated.'
      else
        render json:  @reservation.errors, status: :unprocessable_entity, :edit
      end
    end
  end

  # DELETE /reservations/1 or /reservations/1.json
  def destroy
    if current_user.id
      @reservation.destroy
      respond_to do |format|
        render json: head :no_content, notice: 'Reservation deleted!'
        
      end
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
