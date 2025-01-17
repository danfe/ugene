<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru_RU">
<context>
    <name>ClarkBuildValidator</name>
    <message>
        <source>Taxonomy classification data from NCBI data are not available.</source>
        <translation>Данные классификации таксономии из данных NCBI не доступны.</translation>
    </message>
    <message>
        <source>Taxonomy classification data from NCBI are not full: file &apos;%1&apos; is missing.</source>
        <translation>Данные классификации таксономии из данных NCBI неполные: файл &apos;%1&apos; отсутствует.</translation>
    </message>
</context>
<context>
    <name>ClarkClassifyValidator</name>
    <message>
        <source>The database folder doesn&apos;t exist: %1.</source>
        <translation>Папки с базой данных не существует: %1.</translation>
    </message>
    <message>
        <source>The mandatory database file doesn&apos;t exist: %1.</source>
        <translation>Обязательный файл базы данных не существует:%1.</translation>
    </message>
    <message>
        <source>Reference database for these CLARK settings is not available. RefSeq data are required to build it.</source>
        <translation>Референсная база данных для настроек CLARK не существует. Данные RefSeq необходимы для ее построения.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>CLARK external tool support</source>
        <translation>Внешний инструмент CLARK</translation>
    </message>
    <message>
        <source>The plugin supports CLARK: fast, accurate and versatile sequence classification system (http://clark.cs.ucr.edu)</source>
        <translation>The plugin supports CLARK: fast, accurate and versatile sequence classification system (http://clark.cs.ucr.edu)</translation>
    </message>
</context>
<context>
    <name>U2::ClarkSupport</name>
    <message>
        <source>CLARK (CLAssifier based on Reduced K-mers) is a tool for supervised sequence classification based on discriminative k-mers. UGENE provides the GUI for CLARK and CLARK-l variants of the CLARK framework for solving the problem of the assignment of metagenomic reads to known genomes.</source>
        <translation>CLARK (CLAssifier based on Reduced K-mers) is a tool for supervised sequence classification based on discriminative k-mers. UGENE provides the GUI for CLARK and CLARK-l variants of the CLARK framework for solving the problem of the assignment of metagenomic reads to known genomes.</translation>
    </message>
    <message>
        <source>One of the classifiers from the CLARK framework. This tool is created for powerful workstations and can require a significant amount of RAM.&lt;br&gt;&lt;br&gt;Note that a UGENE-customized version of the tool is required.</source>
        <translation>One of the classifiers from the CLARK framework. This tool is created for powerful workstations and can require a significant amount of RAM.&lt;br&gt;&lt;br&gt;Note that a UGENE-customized version of the tool is required.</translation>
    </message>
    <message>
        <source>Used to set up metagenomic database for CLARK.&lt;br&gt;&lt;br&gt;Note that a UGENE-customized version of the tool is required.</source>
        <translation>Used to set up metagenomic database for CLARK.&lt;br&gt;&lt;br&gt;Note that a UGENE-customized version of the tool is required.</translation>
    </message>
    <message>
        <source>One of the classifiers from the CLARK framework. This tool is created for workstations with limited memory (i.e., “l” for light), it provides precise classification on small metagenomes.&lt;br&gt;&lt;br&gt;Note that a UGENE-customized version of the tool is required.</source>
        <translation>One of the classifiers from the CLARK framework. This tool is created for workstations with limited memory (i.e., “l” for light), it provides precise classification on small metagenomes.&lt;br&gt;&lt;br&gt;Note that a UGENE-customized version of the tool is required.</translation>
    </message>
</context>
<context>
    <name>U2::LocalWorkflow::ClarkBuildPrompter</name>
    <message>
        <source>Use custom data to build %1 CLARK database.</source>
        <translation>Use custom data to build %1 CLARK database.</translation>
    </message>
</context>
<context>
    <name>U2::LocalWorkflow::ClarkBuildTask</name>
    <message>
        <source>Build Clark database</source>
        <translation>Build Clark database</translation>
    </message>
    <message>
        <source>CLARK database URL is undefined</source>
        <translation>CLARK database URL is undefined</translation>
    </message>
    <message>
        <source>Taxdata URL is undefined</source>
        <translation>Taxdata URL is undefined</translation>
    </message>
    <message>
        <source>Genomic library set is empty</source>
        <translation>Genomic library set is empty</translation>
    </message>
    <message>
        <source>Failed to recognize the rank. Please provide a number between 0 and 5, according to the following:
0: species, 1: genus, 2: family, 3: order, 4:class, and 5: phylum.</source>
        <translation>Failed to recognize the rank. Please provide a number between 0 and 5, according to the following:
0: species, 1: genus, 2: family, 3: order, 4:class, and 5: phylum.</translation>
    </message>
    <message>
        <source>Failed to create folder for CLARK database: %1/%2</source>
        <translation>Failed to create folder for CLARK database: %1/%2</translation>
    </message>
</context>
<context>
    <name>U2::LocalWorkflow::ClarkBuildWorker</name>
    <message>
        <source>Build CLARK Database</source>
        <translation>Build CLARK Database</translation>
    </message>
    <message>
        <source>Build a CLARK database from a set of reference sequences (&quot;targets&quot;).
NCBI taxonomy data are used to map the accession number found in each reference sequence to its taxonomy ID.</source>
        <translation>Build a CLARK database from a set of reference sequences (&quot;targets&quot;).
NCBI taxonomy data are used to map the accession number found in each reference sequence to its taxonomy ID.</translation>
    </message>
    <message>
        <source>Output CLARK database</source>
        <translation>Output CLARK database</translation>
    </message>
    <message>
        <source>URL to the folder with the CLARK database.</source>
        <translation>URL to the folder with the CLARK database.</translation>
    </message>
    <message>
        <source>Output URL</source>
        <translation>Output URL</translation>
    </message>
    <message>
        <source>Output URL.</source>
        <translation>Output URL.</translation>
    </message>
    <message>
        <source>Database</source>
        <translation>Database</translation>
    </message>
    <message>
        <source>A folder that should be used to store the database files.</source>
        <translation>A folder that should be used to store the database files.</translation>
    </message>
    <message>
        <source>Genomic library</source>
        <translation>Genomic library</translation>
    </message>
    <message>
        <source>Genomes that should be used to build the database (&quot;targets&quot;).&lt;br&gt;&lt;br&gt;The genomes should be specified in FASTA format. There should be one FASTA file per reference sequence. A sequence header must contain an accession number (i.e., &amp;gt;accession.number ... or &amp;gt;gi|number|ref|accession.number| ...).</source>
        <translation>Genomes that should be used to build the database (&quot;targets&quot;).&lt;br&gt;&lt;br&gt;The genomes should be specified in FASTA format. There should be one FASTA file per reference sequence. A sequence header must contain an accession number (i.e., &amp;gt;accession.number ... or &amp;gt;gi|number|ref|accession.number| ...).</translation>
    </message>
    <message>
        <source>Taxonomy rank</source>
        <translation>Taxonomy rank</translation>
    </message>
    <message>
        <source>Set the taxonomy rank for the database.&lt;br&gt;&lt;br&gt;CLARK classifies metagenomic samples by using only one taxonomy rank. So as a general rule, consider first the genus or species rank, then if a high proportion of reads cannot be classified, reset your targets definition at a higher taxonomy rank (e.g., family or phylum).</source>
        <translation>Set the taxonomy rank for the database.&lt;br&gt;&lt;br&gt;CLARK classifies metagenomic samples by using only one taxonomy rank. So as a general rule, consider first the genus or species rank, then if a high proportion of reads cannot be classified, reset your targets definition at a higher taxonomy rank (e.g., family or phylum).</translation>
    </message>
    <message>
        <source>Built Clark database</source>
        <translation>Built Clark database</translation>
    </message>
    <message>
        <source>Taxonomy classification data from NCBI are not available.</source>
        <translation>Taxonomy classification data from NCBI are not available.</translation>
    </message>
    <message>
        <source>Species</source>
        <translation>Species</translation>
    </message>
    <message>
        <source>Genus</source>
        <translation>Genus</translation>
    </message>
    <message>
        <source>Family</source>
        <translation>Family</translation>
    </message>
    <message>
        <source>Order</source>
        <translation>Order</translation>
    </message>
    <message>
        <source>Class</source>
        <translation>Class</translation>
    </message>
    <message>
        <source>Phylum</source>
        <translation>Phylum</translation>
    </message>
</context>
<context>
    <name>U2::LocalWorkflow::ClarkClassifyPrompter</name>
    <message>
        <source>Classify sequences from &lt;u&gt;%1&lt;/u&gt; with CLARK, use %2 database.</source>
        <translation>Classify sequences from &lt;u&gt;%1&lt;/u&gt; with CLARK, use %2 database.</translation>
    </message>
    <message>
        <source>Classify paired-end reads from &lt;u&gt;%1&lt;/u&gt; with CLARK, use %2 database.</source>
        <translation>Classify paired-end reads from &lt;u&gt;%1&lt;/u&gt; with CLARK, use %2 database.</translation>
    </message>
</context>
<context>
    <name>U2::LocalWorkflow::ClarkClassifyTask</name>
    <message>
        <source>Classify reads with Clark</source>
        <translation>Classify reads with Clark</translation>
    </message>
    <message>
        <source>Unsupported CLARK variant. Only default and light variants are supported.</source>
        <translation>Unsupported CLARK variant. Only default and light variants are supported.</translation>
    </message>
    <message>
        <source>Cannot open classification report: %1</source>
        <translation>Cannot open classification report: %1</translation>
    </message>
    <message>
        <source>Failed to recognize CLARK report format: %1</source>
        <translation>Failed to recognize CLARK report format: %1</translation>
    </message>
    <message>
        <source>Broken CLARK report: %1</source>
        <translation>Broken CLARK report: %1</translation>
    </message>
    <message>
        <source>Duplicate sequence name &apos;%1&apos; have been detected in the classification output.</source>
        <translation>Duplicate sequence name &apos;%1&apos; have been detected in the classification output.</translation>
    </message>
</context>
<context>
    <name>U2::LocalWorkflow::ClarkClassifyWorker</name>
    <message>
        <source>Classify Sequences with CLARK</source>
        <translation>Classify Sequences with CLARK</translation>
    </message>
    <message>
        <source>CLARK (CLAssifier based on Reduced K-mers) is a tool for supervised sequence classification based on discriminative k-mers. UGENE provides the GUI for CLARK and CLARK-l variants of the CLARK framework for solving the problem of the assignment of metagenomic reads to known genomes.</source>
        <translation>CLARK (CLAssifier based on Reduced K-mers) is a tool for supervised sequence classification based on discriminative k-mers. UGENE provides the GUI for CLARK and CLARK-l variants of the CLARK framework for solving the problem of the assignment of metagenomic reads to known genomes.</translation>
    </message>
    <message>
        <source>Input sequences</source>
        <translation>Input sequences</translation>
    </message>
    <message>
        <source>URL(s) to FASTQ or FASTA file(s) should be provided.

In case of SE reads or contigs use the &quot;Input URL 1&quot; slot only.

In case of PE reads input &quot;left&quot; reads to &quot;Input URL 1&quot;, &quot;right&quot; reads to &quot;Input URL 2&quot;.

See also the &quot;Input data&quot; parameter of the element.</source>
        <translation>URL(s) to FASTQ or FASTA file(s) should be provided.

In case of SE reads or contigs use the &quot;Input URL 1&quot; slot only.

In case of PE reads input &quot;left&quot; reads to &quot;Input URL 1&quot;, &quot;right&quot; reads to &quot;Input URL 2&quot;.

See also the &quot;Input data&quot; parameter of the element.</translation>
    </message>
    <message>
        <source>CLARK Classification</source>
        <translation>CLARK Classification</translation>
    </message>
    <message>
        <source>A map of sequence names with the associated taxonomy IDs, classified by CLARK.</source>
        <translation>A map of sequence names with the associated taxonomy IDs, classified by CLARK.</translation>
    </message>
    <message>
        <source>Input URL 1</source>
        <translation>Input URL 1</translation>
    </message>
    <message>
        <source>Input URL 1.</source>
        <translation>Input URL 1.</translation>
    </message>
    <message>
        <source>Input URL 2</source>
        <translation>Input URL 2</translation>
    </message>
    <message>
        <source>Input URL 2.</source>
        <translation>Input URL 2.</translation>
    </message>
    <message>
        <source>Classification tool</source>
        <translation>Classification tool</translation>
    </message>
    <message>
        <source>Use CLARK-l on workstations with limited memory (i.e., &quot;l&quot; for light), this software tool provides precise classification on small metagenomes. It works with a sparse or &apos;&apos;light&apos;&apos; database (up to 4 GB of RAM) while still performing ultra accurate and fast results.&lt;br&gt;&lt;br&gt;Use CLARK on powerful workstations, it requires a significant amount of RAM to run with large database (e.g. all bacterial genomes from NCBI/RefSeq).</source>
        <translation>Use CLARK-l on workstations with limited memory (i.e., &quot;l&quot; for light), this software tool provides precise classification on small metagenomes. It works with a sparse or &apos;&apos;light&apos;&apos; database (up to 4 GB of RAM) while still performing ultra accurate and fast results.&lt;br&gt;&lt;br&gt;Use CLARK on powerful workstations, it requires a significant amount of RAM to run with large database (e.g. all bacterial genomes from NCBI/RefSeq).</translation>
    </message>
    <message>
        <source>Database</source>
        <translation>Database</translation>
    </message>
    <message>
        <source>A path to the folder with the CLARK database files (-D).&lt;br&gt;&lt;br&gt;It is assumed that &quot;targets.txt&quot; file is located in this folder (the file is passed to the &quot;classify_metagenome.sh&quot; script from the CLARK package via parameter -T).</source>
        <translation>A path to the folder with the CLARK database files (-D).&lt;br&gt;&lt;br&gt;It is assumed that &quot;targets.txt&quot; file is located in this folder (the file is passed to the &quot;classify_metagenome.sh&quot; script from the CLARK package via parameter -T).</translation>
    </message>
    <message>
        <source>Output file</source>
        <translation></translation>
    </message>
    <message>
        <source>Specify the output file name.</source>
        <translation></translation>
    </message>
    <message>
        <source>K-mer length</source>
        <translation></translation>
    </message>
    <message>
        <source>Set the k-mer length (-k).&lt;br&gt;&lt;br&gt;This value is critical for the classification accuracy and speed.&lt;br&gt;&lt;br&gt;For high sensitivity, it is recommended to set this value to 20 or 21 (along with the &quot;Full&quot; mode).&lt;br&gt;&lt;br&gt;However, if the precision and the speed are the main concern, use any value between 26 and 32.&lt;br&gt;&lt;br&gt;Note that the higher the value, the higher is the RAM usage. So, as a good tradeoff between speed, precision, and RAM usage, it is recommended to set this value to 31 (along with the &quot;Default&quot; or &quot;Express&quot; mode).</source>
        <translation></translation>
    </message>
    <message>
        <source>Minimum k-mer frequency</source>
        <translation></translation>
    </message>
    <message>
        <source>Minimum of k-mer frequency/occurrence for the discriminative k-mers (-t).&lt;br&gt;&lt;br&gt;For example, for 1 (or, 2), the program will discard any discriminative k-mer that appear only once (or, less than twice).</source>
        <translation></translation>
    </message>
    <message>
        <source>Mode</source>
        <translation></translation>
    </message>
    <message>
        <source>Set the mode of the execution (-m):&lt;ul&gt;&lt;li&gt;&quot;Full&quot; to get detailed results, confidence scores and other statistics.&lt;li&gt;&quot;Default&quot; to get results summary and perform best trade-off between classification speed, accuracy and RAM usage.&lt;li&gt;&quot;Express&quot; to get results summary with the highest speed possible.&lt;/ul&gt;</source>
        <translation></translation>
    </message>
    <message>
        <source>Sampling factor value</source>
        <translation></translation>
    </message>
    <message>
        <source>Sample factor value (-s).&lt;br&gt;&lt;br&gt;To load in memory half the discriminative k-mers set this value to 2. To load a third of these k-mers set it to 3.&lt;br&gt;&lt;br&gt;The higher the factor is, the lower the RAM usage is and the higher the classification speed/precision is. However, the sensitivity can be quickly degraded, especially for values higher than 3.</source>
        <translation></translation>
    </message>
    <message>
        <source>Gap</source>
        <translation></translation>
    </message>
    <message>
        <source>Extended output</source>
        <translation></translation>
    </message>
    <message>
        <source>Request an extended output for the result file (--extended).</source>
        <translation></translation>
    </message>
    <message>
        <source>Load database into memory</source>
        <translation></translation>
    </message>
    <message>
        <source>Request the loading of database file by memory mapped-file (--ldm).&lt;br&gt;&lt;br&gt;This option accelerates the loading time but it will require an additional amount of RAM significant. This option also allows one to load the database in multithreaded-task (see also the &quot;Number of threads&quot; parameter).</source>
        <translation></translation>
    </message>
    <message>
        <source>Number of threads</source>
        <translation></translation>
    </message>
    <message>
        <source>Use multiple threads for the classification and, with the &quot;Load database into memory&quot; option enabled, for the loading of the database into RAM (-n).</source>
        <translation></translation>
    </message>
    <message>
        <source>Input data</source>
        <translation></translation>
    </message>
    <message>
        <source>To classify single-end (SE) reads or contigs, received by reads de novo assembly, set this parameter to &quot;SE reads or contigs&quot;.&lt;br&gt;&lt;br&gt;To classify paired-end (PE) reads, set the value to &quot;PE reads&quot;.&lt;br&gt;&lt;br&gt;One or two slots of the input port are used depending on the value of the parameter. Pass URL(s) to data to these slots.&lt;br&gt;&lt;br&gt;The input files should be in FASTA or FASTQ formats.</source>
        <translation></translation>
    </message>
    <message>
        <source>Unrecognized mode of execution, expected any of: 0 (full), 1 (default), 2 (express) or 3 (spectrum)</source>
        <translation></translation>
    </message>
    <message>
        <source>There were %1 input reads, %2 reads were classified.</source>
        <translation></translation>
    </message>
    <message>
        <source>&quot;Gap&quot; or number of non-overlapping k-mers to pass when creating the database (-п).&lt;br&gt;&lt;br&gt;Increase the value if it is required to reduce the RAM usage. Note that this will degrade the sensitivity.</source>
        <translation></translation>
    </message>
    <message>
        <source>SE reads or contigs</source>
        <translation></translation>
    </message>
    <message>
        <source>PE reads</source>
        <translation></translation>
    </message>
</context>
</TS>
