class GroupsController < ApplicationController

  def index
  end



  def new
    @group = Group.new
    @group.users << current_user
    # @users = User.where('name LIKE(?)', "%#{params[:keyword]}%")#paramsとして送られてきたkeyword（入力された語句）で、Userモデルのnameカラムを検索、結果を@usersに代入
    # respond_to do |format|
    #   format.html
    #   format.json
    # end
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else

      flash.now[:alert] = 'グループの作成に失敗しました。'

      render :new
    end
  end


  def update
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: 'グループを編集しました'
    else
      render :edit
    end
  end

  private
  def group_params


    params.require(:group).permit(:name, user_ids: [])

  end

  def set_group
    @group = Group.find(params[:id])
  end
end
