using EmployeCURD.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using RestFull_API.Model;
using System.Data;
using System.Data.SqlClient;





// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeCURD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeController : ControllerBase
    {


        db db = new db();


        [Route("Getallemploye")]
        [HttpGet]
        public List<Employe> Getallemploye()
        {
          return db.GetAllEmploye();

         
        }



       [Route("PostEmploye")]
        [HttpPost]

        public Employe Post([FromBody] Employe emp)


        {

           return db.Post(emp);
           


        }




      //[Route("xyz")]
        [HttpGet("{id}")]
        public Employe Get(int id)
        {
            return db.GetEmployeById(id);
        }


       // [Route("delete")]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                db.DeleteEmployeById(id);
               
                return  Ok("Employee deleted successfully");

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


        [HttpPut("{id}")]
        public IActionResult UpdateEmploye(int id, [FromBody] Employe updatedEmploye)
        {
            try
            {
                var existingEmploye = db.GetEmployeById(id);

                if (existingEmploye == null)
                {
                    return NotFound();
                }

                existingEmploye.FirstName = updatedEmploye.FirstName;
                existingEmploye.LastName = updatedEmploye.LastName;
                existingEmploye.Email = updatedEmploye.Email;
                existingEmploye.DateOfBirth = updatedEmploye.DateOfBirth;
                existingEmploye.Gender = updatedEmploye.Gender;
                existingEmploye.JobRole = updatedEmploye.JobRole;
                existingEmploye.Hobbies = updatedEmploye.Hobbies;

               
                db.UpdateEmploye(existingEmploye);

                return Ok(existingEmploye);
            }
            catch (Exception ex)
            {
                
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }



    }
}
