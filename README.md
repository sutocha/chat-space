# README


## usersテーブル

|Column|Type|Options|
|------|----|-------|

### Association
- has_many :messages
- has_many :groups, through: :group_users
- has_many :group_users



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belings_to :group


## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, 
|user_id|indteger|null: false, 

### Association
- belongs_to :group
- belongs_to :user


## gourpsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false, 

### Associaton
- has_many :messages
- has_many :users, through: :group_users
- has_many :group_users
