import org.apache.spark.{SparkConf, SparkContext}
import org.apache.spark.mllib.linalg.distributed.{MatrixEntry, CoordinateMatrix}

object MatrixMultiplyRDD {
  def main(args: Array[String]) {
    val conf = new SparkConf().setAppName("RDD MatrixMultiply").setMaster("local")
    val sc = new SparkContext(conf)

    val entriesA = sc.parallelize(Seq(
      MatrixEntry(0, 0, 1.0), MatrixEntry(0, 2, 2.0),
      MatrixEntry(1, 1, 3.0), MatrixEntry(1, 2, -1.0)
    ))

    val entriesB = sc.parallelize(Seq(
      MatrixEntry(0, 0, 1.0), MatrixEntry(1, 0, 3.0), MatrixEntry(2, 0, 5.0),
      MatrixEntry(0, 1, 2.0), MatrixEntry(1, 1, 4.0), MatrixEntry(2, 1, 6.0)
    ))

    val aKeyed = entriesA.map(e => (e.j, (e.i, e.value)))
    val bKeyed = entriesB.map(e => (e.i, (e.j, e.value)))

    val product = aKeyed.join(bKeyed)
      .map { case (_, ((i, v), (k, w))) => ((i, k), v * w) }
      .reduceByKey(_ + _)
      .map { case ((i, k), sum) => MatrixEntry(i, k, sum) }

    val result = new CoordinateMatrix(product)
    result.entries.collect().foreach(e =>
      println(s"(${e.i},${e.j}) = ${e.value}")
    )

    sc.stop()
  }
}

