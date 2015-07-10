using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CricketifyApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ScorecardSummary()
        {
            return View();
        }

        public ActionResult ScorecardDetailed()
        {
            return View();
        }


    }
}