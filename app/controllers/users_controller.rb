class UsersController < ApplicationController

  def index
  end

  def search
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%")#paramsとして送られてきたkeyword（入力された語句）で、Userモデルのnameカラムを検索、結果を@usersに代入
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
