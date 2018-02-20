require 'rails_helper'

describe MessageController do
  describe '#index'do

    describe '#log in' do
      before do
        login user
        get :index, params: { group_id: group.id }
      end

      it 'assigns @message' do
        expect(assigns(:message)).to be_a_new(Message)
      end

      it 'assigns @group' do
        expect(assigns(:group)).to eq group
      end

      it 'redners index' do
        expect(response).to render_template :index
      end
    end

    describe '#not log in' do
    end
  end
end
