SELECT * FROM user_table

-- userid 2 will be that of the recieving friend request
SELECT * FROM personal_connections WHERE userid2 = 2 AND friend_request = 'P'






-- query personal messaegs between 1 and 2
SELECT * FROM messages_personal WHERE (m_sender_id = 1 AND m_reciever_id = 2) OR (m_sender_id = 2 AND m_reciever_id = 1) 

-- get messages for a group
SELECT * FROM messages_group WHERE m_group_id = 1






SELECT * from messages_personal order by m_sentat
SELECT * from messages_group order by m_sentat

-- simple like query
SELECT * FROM user_table WHERE lastname LIKE '%i%' AND firstname LIKE '%k'

-- count the number of messages per group
SELECT COUNT(m_id),m_group_id FROM messages_group GROUP BY m_group_id



