-- Deploy nom-du-projet:oneuser to pg

BEGIN;

 INSERT INTO "user" (
    first_name, last_name, "login", "password", avatar, email
     )
 VALUES
 (
     'Chris', 'Levilain', 'Cvilain', 'Cvilain2020', '/cvilain.jpg', 'cvilain@gmail.com'
    );

 INSERT INTO user_profil (
      user_id, "address", zip_code, city, phone_number , cellphone_number, phone_work, children, statut, gender
     )
 VALUES
(
    1, '58 rue des roses', '12345', 'Oclock', '01.23.45.67.89' , '06.12.34.56.78', '09.87.65.43.21', 2, 'Helper', 'Homme'
);

COMMIT;
