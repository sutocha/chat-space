require 'rails_helper'

describe MessagesController do
  let(:group) { create(:group) }
  let(:user) { create(:user) }

  describe '#index'do

    context '#log in' do
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

    context '#not log in' do
      before do
        get :index, params: { group_id: group.id }
      end

      it 'redirects to new_user_session_path' do
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end


  describe '#create' do
    let(:params){{ group_id: group.id, user_id: user.id, message: attributes_for(:message) }}
    #このparamsの宣言によって書くcontext内でparamsの情報が使える（@のインスタンス変数の代わり）
    context 'log in' do
      before do
        login user
      end
      context 'can save' do
        test { post :create, params: params }
        it 'count up message' do
          expet{ test }.to change(Message, :count).by(1)
        end
        it 'redirects to group_messages_path' do
          subject
          expect(response).to redirect_to(group_messages_path(group))
        end
      end
      context 'cant save' do
        let(:invalid_params) { { group_id: group.id, user_id: user.id, message: attributes_for(:message, content: nil, image: nil) } }

        test { post :create, params: invalid_params }

        it 'does not count up' do
          expect{ test }.not_to change(Message, :count)
        end
        it 'renders index' do
          expect(response).to render_template :index
        end
      end
    end

    context 'not log in' do
      it 'redirects to new_user_session_path' do
        post :create, params: params
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end
end
