CREATE TABLE user_table (
    userid INT  PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL check(length(username) >= 3),
    firstname VARCHAR(255) NOT NULL check(length(firstname) >= 3),
    lastname VARCHAR(255) NOT NULL check(length(lastname) >= 3),
    email VARCHAR(255) NOT NULL check(length(email) >= 8),
    -- pass VARCHAR(255) NOT NULL check(pass like '%[0-9]%' and pass like '%[A-Z]%' and length(pass) >=  6),
    pass VARCHAR(255) NOT NULL check(length(pass) >=  6),
    user_numberofconnection INT NOT NULL,
    user_numberofgroups INT NOT NULL,
    -- profile_pic BLOB,
    profile_pic VARCHAR(255)
);
--

CREATE TABLE group_table (
    g_id INT PRIMARY KEY AUTO_INCREMENT,
    g_name VARCHAR(255) NOT NULL,
    g_desc VARCHAR(255) NOT NULL,
    g_creator_id INT, FOREIGN KEY(g_creator_id) REFERENCES user_table (userid) ,
    g_createat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    g_channel_id VARCHAR(255),
    g_members INT DEFAULT 1
);

insert into group_table (g_name,g_desc,g_creator_id,g_channel_id) values('FIRST group','Timepass',1,'channelid1');
insert into group_table (g_name,g_desc,g_creator_id,g_channel_id) values('Farhan group','Timepass',1,'channelid2');
insert into group_table (g_name,g_desc,g_creator_id,g_channel_id) values('pyro Farhan','useless grop',4,'channelid3');
--

CREATE TABLE personal_connections (
    userid1 INT NOT NULL , FOREIGN KEY(userid1) REFERENCES user_table (userid),
    userid2 INT NOT NULL , FOREIGN KEY(userid2) REFERENCES user_table (userid),
    friend_request VARCHAR(1) DEFAULT 'P'
);
insert into personal_connections(userid1,userid2) values (1,2);
insert into personal_connections(userid1,userid2) values (1,3);
insert into personal_connections(userid1,userid2) values (1,4);
insert into personal_connections(userid1,userid2) values (2,4);
--

CREATE TABLE group_connections (
    userid INT NOT NULL , FOREIGN KEY(userid) REFERENCES user_table (userid),
    groupid INT NOT NULL , FOREIGN KEY(groupid) REFERENCES group_table (g_id)
);
insert into group_connections values (1,1);
insert into group_connections values (2,1);
insert into group_connections values (3,1);
insert into group_connections values (4,1);
insert into group_connections values (4,3);
insert into group_connections values (3,3);

--
CREATE TABLE messages_personal (
    m_id INT PRIMARY KEY AUTO_INCREMENT,
    m_body VARCHAR(255) NOT NULL,
    m_sender_id INT NOT NULL , FOREIGN KEY(m_sender_id) REFERENCES user_table (userid),
    m_reciever_id INT NOT NULL , FOREIGN KEY(m_reciever_id) REFERENCES user_table (userid),
    m_sentat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
insert into messages_personal(m_body,m_sender_id,m_reciever_id) values ('message test1 2',1,2);
insert into messages_personal(m_body,m_sender_id,m_reciever_id) values ('message test 1 2',1,2);
insert into messages_personal(m_body,m_sender_id,m_reciever_id) values ('message test1 3',1,3);
insert into messages_personal(m_body,m_sender_id,m_reciever_id) values ('message test 2 1',2,1);
insert into messages_personal(m_body,m_sender_id,m_reciever_id) values ('message test 2 3',2,3);
insert into messages_personal(m_body,m_sender_id,m_reciever_id) values ('message test 3 2',3,2);
--

CREATE TABLE messages_group (
    m_id INT PRIMARY KEY AUTO_INCREMENT,
    m_body VARCHAR(255) NOT NULL,
    m_sender_id INT NOT NULL , FOREIGN KEY(m_sender_id) REFERENCES user_table (userid),
    m_group_id INT NOT NULL , FOREIGN KEY(m_group_id) REFERENCES group_table (g_id),
    m_sentat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
insert into messages_group(m_body,m_sender_id,m_group_id) values ('message to group 1',1,1);
insert into messages_group(m_body,m_sender_id,m_group_id) values ('message group 1',1,1);
insert into messages_group(m_body,m_sender_id,m_group_id) values ('message group 1',1,1);
insert into messages_group(m_body,m_sender_id,m_group_id) values ('message group 1',1,1);
insert into messages_group(m_body,m_sender_id,m_group_id) values ('message group 3',2,1);
