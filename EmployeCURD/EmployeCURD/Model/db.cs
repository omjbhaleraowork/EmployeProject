using System.Data;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using RestFull_API.Model;
namespace EmployeCURD.Model
{
    public class db
    {

        private static IConfiguration _configuration;

        public string GetConnetionString()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json");
            _configuration = builder.Build();
            string dbConn = _configuration.GetConnectionString("DbConn");
            return dbConn;
        }

        public List<Employe> GetAllEmploye()
        {
            List<Employe> emp = new List<Employe>();
            DataTable dt = new DataTable();
            SqlConnection conn = new SqlConnection(GetConnetionString());
            

            SqlCommand cmd = new SqlCommand("Getallemploye", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            conn.Open();
            adapter.Fill(dt);
            conn.Close();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                Employe employe = new Employe();
                employe.Id = Convert.ToInt32(dt.Rows[i]["ID"]);
                employe.FirstName = dt.Rows[i]["FirstName"].ToString();
                employe.LastName = dt.Rows[i]["LastName"].ToString();
                employe.Email = dt.Rows[i]["Email"].ToString();
                employe.DateOfBirth = dt.Rows[i]["DateOfBirth"].ToString();
                employe.Gender = dt.Rows[i]["Gender"].ToString();
                employe.JobRole = dt.Rows[i]["JobRole"].ToString();
                employe.Hobbies = dt.Rows[i]["Hobbies"].ToString();
                emp.Add(employe);
            }
            return emp;
        }


        public Employe Post([FromBody] Employe emp)

        {


            SqlConnection conn = new SqlConnection(GetConnetionString());

            SqlDataAdapter da;
            DataTable dt = new DataTable();


            try
            {


                SqlCommand cmd = new SqlCommand("RegisterEmploye", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@FirstName", emp.FirstName);
                cmd.Parameters.AddWithValue("@LastName", emp.LastName);
                cmd.Parameters.AddWithValue("@Email", emp.Email);
                cmd.Parameters.AddWithValue("@DateOfBirth", emp.DateOfBirth);
                cmd.Parameters.AddWithValue("@Gender", emp.Gender);
                cmd.Parameters.AddWithValue("@JobRole", emp.JobRole);
                cmd.Parameters.AddWithValue("@Hobbies", emp.Hobbies);
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
                return (emp);

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public Employe GetEmployeById(int id)
        {
            Employe employe = new Employe();
            DataTable dt = new DataTable();
            SqlConnection conn = new SqlConnection(GetConnetionString());

            try
            {
                SqlCommand cmd = new SqlCommand("GetEmployeById", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", id);
                SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                conn.Open();
                adapter.Fill(dt);
                conn.Close();

                if (dt.Rows.Count > 0)
                {
                    employe.Id = Convert.ToInt32(dt.Rows[0]["ID"]);
                    employe.FirstName = dt.Rows[0]["FirstName"].ToString();
                    employe.LastName = dt.Rows[0]["LastName"].ToString();
                    employe.Email = dt.Rows[0]["Email"].ToString();
                    employe.DateOfBirth = dt.Rows[0]["DateOfBirth"].ToString();
                    employe.Gender = dt.Rows[0]["Gender"].ToString();
                    employe.JobRole = dt.Rows[0]["JobRole"].ToString();
                    employe.Hobbies = dt.Rows[0]["Hobbies"].ToString();
                }

                return employe;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void DeleteEmployeById(int id)
        {
            SqlConnection conn = new SqlConnection(GetConnetionString());

            try
            {
                SqlCommand cmd = new SqlCommand("DeleteEmployeById", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", id);
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public void UpdateEmploye(Employe employe)
        {
            SqlConnection conn = new SqlConnection(GetConnetionString());

            try
            {
                SqlCommand cmd = new SqlCommand("UpdateEmploye", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", employe.Id);
                cmd.Parameters.AddWithValue("@FirstName", employe.FirstName);
                cmd.Parameters.AddWithValue("@LastName", employe.LastName);
                cmd.Parameters.AddWithValue("@Email", employe.Email);
                cmd.Parameters.AddWithValue("@DateOfBirth", employe.DateOfBirth);
                cmd.Parameters.AddWithValue("@Gender", employe.Gender);
                cmd.Parameters.AddWithValue("@JobRole", employe.JobRole);
                cmd.Parameters.AddWithValue("@Hobbies", employe.Hobbies);

                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


    }

}



