using Microsoft.Data.SqlClient;

namespace IdentityDemo.Helpers
{
	//this is basically to log some of the exception to a file(logging for enterprise application)
	public class ServiceUtils
	{
		public static void WriteToFile(string Message)
		{
			string path = "C:\\inetpub\\Identity\\identity_log";

			if (!Directory.Exists(path))
			{

				Directory.CreateDirectory(path);

			}
			string filepath = path + "\\ServiceLog_" + DateTime.Now.Date.ToShortDateString().Replace('/', '_') + ".txt";

			if (!File.Exists(filepath))
			{
				using (StreamWriter sw = File.CreateText(filepath))
				{
					sw.WriteLine(DateTime.Now + " :: " + Message);
				}
			}
			else
			{
				using (StreamWriter sw = File.AppendText(filepath))
				{
					sw.WriteLine(DateTime.Now + " :: " + Message);
				}
			}
		}

		public static string SafeGetString(SqlDataReader reader, int colIndex)
		{
			if (!reader.IsDBNull(colIndex))
				return reader.GetString(colIndex);
			return string.Empty;
		}
	}
}

