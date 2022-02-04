class ReservationsController < ApplicationController
  # before_action :set_reservation, only: %i[show edit update destroy]
  before_action :current_user, only: [:update, :index, :new, :create, :destroy]


  # GET /reservations or /reservations.json
  def index
    @user = User.find(session[:user_id])
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
      respond_to do |format|
        if @reservation.save
          format.html { redirect_to reservation_url(@reservation), notice: 'Reservation was successfully created.' }
          format.json { render :show, status: :created, location: @reservation }
          redirect_to @reservation
        else
          format.html { render :new, status: :unprocessable_entity, notice: 'Reservation not successfully created' }
          format.json { render json: @reservation.errors, status: :unprocessable_entity }
        end
      end
  end

  # PATCH/PUT /reservations/1 or /reservations/1.json
  def update
    respond_to do |format|
      if @reservation.update(reservation_params)
        format.html { redirect_to reservation_url(@reservation), notice: 'Reservation was successfully updated.' }
        format.json { render :show, status: :ok, location: @reservation }
        redirect_to @reservation
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end



  # def update
  #   @reservation = Reservation.find(params[:id])
  #   if @reservation.update(reservation_params)
  #     flash[:success] = 'Reservation was successfully updated.'
  #     redirect_to @reservation
  #   else
  #     render :edit
  #   end
  # end

  # DELETE /reservations/1 or /reservations/1.json
  def destroy
    if current_user.id
      @reservation.destroy
      respond_to do |format|
        format.html { redirect_to reservations_url, notice: 'Reservation was successfully destroyed.' }
        format.json { head :no_content }
        # flash[:success] = 'Reservation deleted!'
        # redirect_to new_reservation_path(reservation_params)
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
