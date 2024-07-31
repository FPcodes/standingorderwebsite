using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace standingorderapi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<StandingOrderInfo> StandingOrderInfos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Specify the exact table name
            modelBuilder.Entity<StandingOrderInfo>().ToTable("standingorderinfo");
        }
    }

    public class StandingOrderInfo
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required(ErrorMessage = "First Name is required")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Only letters are allowed in the First Name")]
        [Column("firstname")]
        public string? FirstName { get; set; }

        [Required(ErrorMessage = "Last Name is required")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Only letters are allowed in the Last Name")]    
        [Column("lastname")]
        public string? LastName { get; set; }

        [Required(ErrorMessage = "Client ID is required.")]
        [Range(1, 99999, ErrorMessage = "Client ID cannot be longer than 5 digits")]
        [Column("clientid")]
        public int ClientId { get; set; }

        [Required(ErrorMessage = "Phone number is required")]
        [RegularExpression(@"^[0-9]+$", ErrorMessage = "Only numbers are allowed in the Phone number")] 
        [Column("phone")]
        public string? Phone { get; set; }

        [Column("daystraveling")]
        public int DaysTraveling { get; set; }

        [Column("monday")]
        public bool Monday { get; set; }

        [Column("tuesday")]
        public bool Tuesday { get; set; }

        [Column("wednesday")]
        public bool Wednesday { get; set; }

        [Column("thursday")]
        public bool Thursday { get; set; }

        [Column("friday")]
        public bool Friday { get; set; }

        [Column("saturday")]
        public bool Saturday { get; set; }

        [Column("sunday")]
        public bool Sunday { get; set; }

        [Column("firstpickup")]
        public string? FirstPickup { get; set; }

        [Required(ErrorMessage = "City for first pickup is required")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Only letters are allowed in the city for first pickup")]
        [Column("cityone")]
        public string? CityOne { get; set; }

        [Required(ErrorMessage = "Zip Code for first pickup is required.")]
        [Range(1, 99999, ErrorMessage = "Zip Code for first pickup cannot be longer than 5 digits")]
        [Column("zipone")]
        public int ZipOne { get; set; }

        [Column("firstdropoff")]
        public string? FirstDropoff { get; set; }

        [Required(ErrorMessage = "City for first dropoff is required")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Only letters are allowed in the city for first dropoff")]
        [Column("citytwo")]
        public string? CityTwo { get; set; }

        [Required(ErrorMessage = "Zip Code for first dropoff is required.")]
        [Range(1, 99999, ErrorMessage = "Zip Code for first dropoff cannot be longer than 5 digits")]
        [Column("ziptwo")]
        public int ZipTwo { get; set; }

        [Column("dropofftime")]
        public TimeSpan DropoffTime { get; set; }

        [Column("roundtripsameaddresses")]
        public bool RoundTripSameAddresses { get; set; }

        [Column("secondpickup")]
        public string? SecondPickup { get; set; }

        [Required(ErrorMessage = "City for second pickup is required")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Only letters are allowed in the city for second pickup")]
        [Column("citythree")]
        public string? CityThree { get; set; }

        [Required(ErrorMessage = "Zip Code for second pickup is required.")]
        [Range(1, 99999, ErrorMessage = "Zip Code for second pickup cannot be longer than 5 digits")]
        [Column("zipthree")]
        public int ZipThree { get; set; }

        [Column("seconddropoff")]
        public string? SecondDropoff { get; set; }

        [Required(ErrorMessage = "City for second dropoff is required")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Only letters are allowed in the city for second dropoff")]
        [Column("cityfour")]
        public string? CityFour { get; set; }

        [Required(ErrorMessage = "Zip Code for second dropoff is required.")]
        [Range(1, 99999, ErrorMessage = "Zip Code for second dropoff cannot be longer than 5 digits")]
        [Column("zipfour")]
        public int ZipFour { get; set; }

        [Column("pickuptime")]
        public TimeSpan PickupTime { get; set; }

        [Column("travelingwithaid")]
        public bool TravelingWithAid { get; set; }

        [Column("device")]
        public string? Device { get; set; }
    }
}
