use TESTDB

create table Employe (
Id int IDENTITY(1,1),
FirstName varchar(100),
LastName varchar(100),
Email varchar(50),
DateOfBirth varchar(50) ,
Gender varchar(20),
JobRole varchar(20),
Hobbies varchar(100)

);

select * from Employe order by id asc


--read all employe

CREATE PROCEDURE Getallemploye
AS
BEGIN
  SELECT * FROM Employe
  ORDER BY id ASC;
END;




--Get by ID


CREATE PROCEDURE GetEmployeById
(
@Id Int
)
AS
Begin
SELECT *  from Employe where Id=@Id
end

--insert


CREATE PROCEDURE RegisterEmploye
(
@FirstName Varchar(100),
@LastName varchar(100),
@Email varchar(50),
@DateOfBirth varchar(50) ,
@Gender varchar(20),
@JobRole varchar(20),
@Hobbies varchar(100)

)
AS
Begin
Insert into Employe (FirstName, LastName, Email, DateOfBirth, Gender, JobRole, Hobbies)
Values (
@FirstName,
@LastName,
@Email,
@DateOfBirth,
@Gender,
@JobRole,
@Hobbies
)
end



--update


CREATE PROCEDURE UpdateEmploye
(
    @Id INT,
    @FirstName NVARCHAR(50),
    @LastName NVARCHAR(50),
    @Email NVARCHAR(100),
    @DateOfBirth DATE,
    @Gender NVARCHAR(10),
    @JobRole NVARCHAR(50),
    @Hobbies NVARCHAR(MAX)
)
AS
BEGIN
    UPDATE Employe
    SET
        FirstName = @FirstName,
        LastName = @LastName,
        Email = @Email,
        DateOfBirth = @DateOfBirth,
        Gender = @Gender,
        JobRole = @JobRole,
        Hobbies = @Hobbies
    WHERE
        Id = @Id;
END;




-- DELETE EMPLOYE


CREATE PROCEDURE DeleteEmployeById
(
    @Id INT
)
AS
BEGIN
    DELETE FROM Employe WHERE Id = @Id;
END




--Insert into Employe1 (Name)
--Values ('om'
--)
--Insert into Employe1 (Name)
--Values ('vishal'
--)
--Insert into Employe1 (Name)
--Values ('sai'
--)
--Insert into Employe1 (Name)
--Values ('abhi'
--)

--EXEC GetEmployeById @Id=9

--drop procedure Getallemploye
--drop table Employe
--drop procedure RegisterEmploye
--drop procedure getempbyid
--drop procedure UpdateEmploye
select GETDATE();