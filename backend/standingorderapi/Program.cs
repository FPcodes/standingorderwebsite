using Microsoft.EntityFrameworkCore;
using standingorderapi.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

//CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:3000") // Allow your Next.js app
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();

app.MapGet("/", () => "Hello World!");

app.MapPost("/submitted", async (StandingOrderInfo form, ApplicationDbContext db) =>
{
    db.StandingOrderInfos.Add(form);
    await db.SaveChangesAsync();
    return Results.Ok(new { form.FirstName, form.Phone });
});

// Endpoint to get all results from the table
app.MapGet("/standingorders", async (ApplicationDbContext db) =>
{
    var results = await db.StandingOrderInfos.ToListAsync();
    return Results.Ok(results);
});

app.Run();
