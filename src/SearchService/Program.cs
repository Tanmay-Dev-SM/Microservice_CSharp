using System.Net;
using MongoDB.Driver;
using MongoDB.Entities;
using Polly;
using Polly.Extensions.Http;
using SearchService.Data;
using SearchService.Models;
using SearchService.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddHttpClient<AuctionSvcHttpClient>().AddPolicyHandler(GetPolicy());

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

//It will still start the service and keep on connecting to the database
app.Lifetime.ApplicationStarted.Register(async () => {
  try
  {
    await DbInitializer.InitDb(app);
  }
  catch (System.Exception e)
  {
    Console.WriteLine(e);
  }
});


app.Run();

//Making the Service Http Resilence using Polling, it will try to connect to other service until it is not
static IAsyncPolicy<HttpResponseMessage> GetPolicy()
        => HttpPolicyExtensions
          .HandleTransientHttpError()
          .OrResult(msg => msg.StatusCode == HttpStatusCode.NotFound)
          .WaitAndRetryForeverAsync(_ => TimeSpan.FromSeconds(3));