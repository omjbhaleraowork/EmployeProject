using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;

namespace RestFull_API.Model
{
    public class Employe
    {
        [Key]
        public int Id { get; set; }

        [StringLength(100)]
        public string FirstName { get; set; }


        [StringLength(100)]
      public string LastName { get; set; }

        public string  Email { get; set; }


        public string DateOfBirth { get; set; }

        public string Gender { get; set; }  

        public string JobRole { get; set; }

        public string Hobbies { get; set; }



    }
}
