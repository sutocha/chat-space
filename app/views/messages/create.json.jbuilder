json.(@message, :content, :image)
json.created_at @message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')
json.user_name @message.user.name
