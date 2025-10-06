import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
public class WC_Driver {
public static void main(String[] args) throws Exception {
if (args.length != 2) {
System.err.println("Usage: WC_Driver <input> <output>");
System.exit(2);
}
Job job = Job.getInstance(new Configuration(), "Word Count with Combiner");
job.setJarByClass(WC_Driver.class);
job.setMapperClass(WC_Mapper.class);
job.setCombinerClass(WC_Reducer.class); // Combiner enabled
job.setReducerClass(WC_Reducer.class);

job.setOutputKeyClass(Text.class);
job.setOutputValueClass(IntWritable.class);
FileInputFormat.addInputPath(job, new Path(args[0]));
FileOutputFormat.setOutputPath(job, new Path(args[1]));
System.exit(job.waitForCompletion(true) ? 0 : 1);
}
}
