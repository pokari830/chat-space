require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context "messageを保存できる場合" do
      it "imageとtextがあれば保存できる場合" do
        expect(build(:message)).to be_valid
      end

      it "textがあれば保存できる" do
        expect(build(:message, text: nil)).to be_valid
      end

      it "imageがあれば保存できる" do
        expect(build(:message, image: nil)).to be_valid
      end
    end

    context "メッセージが保存できない場合" do
      it "メッセージと画像がなければ保存できない" do
        message = build(:message, image: nil, text: nil)
        message.valid?
        expect(message.errors[:text]).to include("を入力してください")
      end

      it "group_idがなければ保存できない" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it "user_idがなければ保存できない" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end
