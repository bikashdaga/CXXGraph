window.BENCHMARK_DATA = {
  "lastUpdate": 1634231150337,
  "repoUrl": "https://github.com/ZigRazor/CXXGraph",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96020a672437ba8dd47e3344230fcb9e108b002a",
          "message": "Adjustment for new version of Google Benchmark",
          "timestamp": "2021-08-26T08:23:53Z",
          "tree_id": "3eb14f98916c59ba6927c70e5962b66cb4a449ea",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/96020a672437ba8dd47e3344230fcb9e108b002a"
        },
        "date": 1629966773617,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.232418208727314,
            "unit": "ns/iter",
            "extra": "iterations: 37870544\ncpu: 18.221958707537972 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999998009599e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.803171927589286,
            "unit": "ns/iter",
            "extra": "iterations: 36778204\ncpu: 18.803141855431544 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.8603168464310387,
            "unit": "ns/iter",
            "extra": "iterations: 175069859\ncpu: 3.8600586352217245 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.555222578135989,
            "unit": "ns/iter",
            "extra": "iterations: 102950925\ncpu: 6.554815520113102 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 323.8154141644177,
            "unit": "ns/iter",
            "extra": "iterations: 2231493\ncpu: 323.8082409400342 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 83529.0602534547,
            "unit": "ns/iter",
            "extra": "iterations: 8680\ncpu: 83521.17972350231 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 31043337.63157959,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 31042421.631578915 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8917150638.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8916608486 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 22.859035859414117,
            "unit": "ns/iter",
            "extra": "iterations: 31814240\ncpu: 22.85867117994964 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 30.98950535503314,
            "unit": "ns/iter",
            "extra": "iterations: 22699291\ncpu: 30.98706030069396 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 550.5255425400443,
            "unit": "ns/iter",
            "extra": "iterations: 1252949\ncpu: 550.5097366293426 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 79797.11049660493,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 79789.5974190571 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 34373689.95833386,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 34372318.87500003 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10098511976.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10097802421 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 527.418924692035,
            "unit": "ns/iter",
            "extra": "iterations: 1264010\ncpu: 527.3853047048664 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 519.6355981048481,
            "unit": "ns/iter",
            "extra": "iterations: 709608\ncpu: 1032.7711539328754 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 310.9025399036513,
            "unit": "ns/iter",
            "extra": "iterations: 1204652\ncpu: 671.9634616470141 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 83762.42327149837,
            "unit": "ns/iter",
            "extra": "iterations: 8302\ncpu: 83761.00168634123 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 61791.536131472065,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 97205.19594594617 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 26168.913595980375,
            "unit": "ns/iter",
            "extra": "iterations: 13732\ncpu: 45998.2703903293 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 33819843.750001155,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 33814363.54999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 26837059.916665852,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 42241510.70833335 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 11953205.325000126,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 20101197.774999954 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9348586841.999975,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9347591834.000006 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5032047341.249992,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5533734217.499997 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2259354457.4374995,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2917497764.5000005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.680093899159234,
            "unit": "ns/iter",
            "extra": "iterations: 261606602\ncpu: 2.6799077494229513 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.461005457739021,
            "unit": "ns/iter",
            "extra": "iterations: 129000668\ncpu: 5.460850388774741 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 105.39432103705889,
            "unit": "ns/iter",
            "extra": "iterations: 6741583\ncpu: 105.38728886079123 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2218.183673018628,
            "unit": "ns/iter",
            "extra": "iterations: 316911\ncpu: 2218.065639879973 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 49514.67215926081,
            "unit": "ns/iter",
            "extra": "iterations: 13412\ncpu: 49511.346480763204 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 816013.1009420619,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 815942.4414535656 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.66553276574403,
            "unit": "ns/iter",
            "extra": "iterations: 29081318\ncpu: 23.66504788400589 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 28.322199205452076,
            "unit": "ns/iter",
            "extra": "iterations: 25786513\ncpu: 28.320019732796027 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 409.4867765524008,
            "unit": "ns/iter",
            "extra": "iterations: 1665791\ncpu: 409.4781308099332 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6884.421678604014,
            "unit": "ns/iter",
            "extra": "iterations: 106529\ncpu: 6883.999230256513 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 114992.16976556313,
            "unit": "ns/iter",
            "extra": "iterations: 6185\ncpu: 114989.5825383991 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1954365.337110401,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 1954220.5779036614 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 392.58442425688287,
            "unit": "ns/iter",
            "extra": "iterations: 1837434\ncpu: 392.571690738272 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 518.0499468266956,
            "unit": "ns/iter",
            "extra": "iterations: 1427408\ncpu: 1030.4909402217222 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 256.27437872241205,
            "unit": "ns/iter",
            "extra": "iterations: 1430520\ncpu: 514.4632706987787 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6708.2604755324555,
            "unit": "ns/iter",
            "extra": "iterations: 104935\ncpu: 6707.653442607498 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8070.413576374797,
            "unit": "ns/iter",
            "extra": "iterations: 43038\ncpu: 15987.552418792453 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3869.588121919635,
            "unit": "ns/iter",
            "extra": "iterations: 85220\ncpu: 7769.253320816717 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 109927.35685484207,
            "unit": "ns/iter",
            "extra": "iterations: 5952\ncpu: 109919.37684811736 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 175222.3207295633,
            "unit": "ns/iter",
            "extra": "iterations: 2248\ncpu: 330820.4559608583 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 72825.93562835133,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 141888.07433155496 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1908650.4748009667,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 1908429.2307691786 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2902183818.2500234,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3204544685.5 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 494920610.9375126,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 594620597.2500023 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b6e56b6ceb5a177ce7298edcca36d03e440c937",
          "message": "Fix #48 :\nNot removed non compressed files when compression is flagged.",
          "timestamp": "2021-08-27T07:07:44Z",
          "tree_id": "5a4fe87d232fdc5b335f1b73fb3ac8bbeefe1cae",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/8b6e56b6ceb5a177ce7298edcca36d03e440c937"
        },
        "date": 1630048592471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.57386721351075,
            "unit": "ns/iter",
            "extra": "iterations: 41381695\ncpu: 16.57217298614762 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.010000047102949e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.710718207534217,
            "unit": "ns/iter",
            "extra": "iterations: 41637923\ncpu: 16.710175865400398 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.9801527772421887,
            "unit": "ns/iter",
            "extra": "iterations: 177628681\ncpu: 3.980076719704969 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.689333713087733,
            "unit": "ns/iter",
            "extra": "iterations: 110302902\ncpu: 6.689020847339081 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 286.7342709104301,
            "unit": "ns/iter",
            "extra": "iterations: 2479085\ncpu: 286.71416187827344 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 77574.78101554932,
            "unit": "ns/iter",
            "extra": "iterations: 9197\ncpu: 77571.7877568772 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 23892199.826087292,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 23889841.78260871 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11463560030.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11458460686 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000022434506e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.443131942920203,
            "unit": "ns/iter",
            "extra": "iterations: 29890251\ncpu: 23.44173248996799 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 25.7247170557489,
            "unit": "ns/iter",
            "extra": "iterations: 27076712\ncpu: 25.72381532144679 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 530.0159362977656,
            "unit": "ns/iter",
            "extra": "iterations: 1303816\ncpu: 529.9897516213946 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 84526.23615160327,
            "unit": "ns/iter",
            "extra": "iterations: 7889\ncpu: 84523.34643174066 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 27227105.838709384,
            "unit": "ns/iter",
            "extra": "iterations: 31\ncpu: 27225286.38709676 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 12026838532,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12026093080.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 506.8598273526976,
            "unit": "ns/iter",
            "extra": "iterations: 1323739\ncpu: 506.8383676842603 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 664.5655855830454,
            "unit": "ns/iter",
            "extra": "iterations: 555122\ncpu: 1323.7488840290894 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 319.9626773911425,
            "unit": "ns/iter",
            "extra": "iterations: 954388\ncpu: 682.7905935531426 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 85704.669762893,
            "unit": "ns/iter",
            "extra": "iterations: 8182\ncpu: 85684.61329748205 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 63068.39504891954,
            "unit": "ns/iter",
            "extra": "iterations: 6746\ncpu: 100942.19759857665 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 34226.3202923753,
            "unit": "ns/iter",
            "extra": "iterations: 15528\ncpu: 64442.68553580627 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 27585649.708332956,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 27580848.666666508 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 20521042.16666706,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 34712523.87499994 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10021507.17500001,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 18082180.92499997 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11453789772.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11448061109.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4287597490.7500024,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5066030989.000003 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1976696610.8124998,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2584730358.249999 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.581804058298676,
            "unit": "ns/iter",
            "extra": "iterations: 262417207\ncpu: 2.5817180197333522 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.208758850665433,
            "unit": "ns/iter",
            "extra": "iterations: 129843908\ncpu: 5.208222599091829 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 93.43490260246757,
            "unit": "ns/iter",
            "extra": "iterations: 7183344\ncpu: 93.43200325642283 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2060.3600909698093,
            "unit": "ns/iter",
            "extra": "iterations: 350006\ncpu: 2060.1003268515365 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 35173.79549718606,
            "unit": "ns/iter",
            "extra": "iterations: 20787\ncpu: 35074.80930389205 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 926546.2294429615,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 926482.1273209709 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 22.059599136511565,
            "unit": "ns/iter",
            "extra": "iterations: 32146355\ncpu: 22.05751659869339 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 24.782386232596856,
            "unit": "ns/iter",
            "extra": "iterations: 29731561\ncpu: 24.78145079567132 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 368.1993123512553,
            "unit": "ns/iter",
            "extra": "iterations: 1919003\ncpu: 368.1806198322783 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5916.589002810752,
            "unit": "ns/iter",
            "extra": "iterations: 122013\ncpu: 5916.504003671767 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 95626.08542647962,
            "unit": "ns/iter",
            "extra": "iterations: 7644\ncpu: 95588.19911041489 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1791000.9625669478,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 1790961.7540106697 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 381.77382353963014,
            "unit": "ns/iter",
            "extra": "iterations: 1838056\ncpu: 381.75697693650665 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 541.4199781110563,
            "unit": "ns/iter",
            "extra": "iterations: 628628\ncpu: 1081.640270557475 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 274.7051026708863,
            "unit": "ns/iter",
            "extra": "iterations: 1321504\ncpu: 549.4782641596153 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5898.598674999635,
            "unit": "ns/iter",
            "extra": "iterations: 109283\ncpu: 5898.334919429518 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8946.51639849956,
            "unit": "ns/iter",
            "extra": "iterations: 38906\ncpu: 17868.835835089198 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4431.859025401246,
            "unit": "ns/iter",
            "extra": "iterations: 75980\ncpu: 8934.252540141795 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 100314.19901756327,
            "unit": "ns/iter",
            "extra": "iterations: 6718\ncpu: 100314.14379279841 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 275092.6809045295,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 517204.2445560994 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 82586.28570579684,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 158789.88688213256 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1869635.5277045295,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 1869588.158311323 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3378731201.49996,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3579198367.000011 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 984882508.6249917,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1093401013.4999971 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69262e68af323de06ddd9c30c55efa3d39a9defa",
          "message": "Documentation update for WriteToFile Function",
          "timestamp": "2021-08-27T07:15:12Z",
          "tree_id": "218becde68bf9e35e7492543b8e9dded8c45a341",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/69262e68af323de06ddd9c30c55efa3d39a9defa"
        },
        "date": 1630049083795,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.571156635768396,
            "unit": "ns/iter",
            "extra": "iterations: 37842985\ncpu: 18.569150108005484 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000661922968e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 19.106929071780577,
            "unit": "ns/iter",
            "extra": "iterations: 36626522\ncpu: 19.104969098622032 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.999999998593466e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 9.000000003034359e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.5001693120733695,
            "unit": "ns/iter",
            "extra": "iterations: 152372477\ncpu: 4.4997766821103795 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.087772519285153,
            "unit": "ns/iter",
            "extra": "iterations: 101100368\ncpu: 7.0869818990174185 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 325.0035675776528,
            "unit": "ns/iter",
            "extra": "iterations: 2115441\ncpu: 324.97923364442676 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 89026.47400024859,
            "unit": "ns/iter",
            "extra": "iterations: 7827\ncpu: 89009.11358119338 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 26773998.950000077,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 26773025.200000025 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10883834087.999958,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10883014545.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000661922968e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.999999998593466e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 24.71863204596477,
            "unit": "ns/iter",
            "extra": "iterations: 28287237\ncpu: 24.71698653353796 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 27.54806498658502,
            "unit": "ns/iter",
            "extra": "iterations: 25804033\ncpu: 27.545629669594685 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 558.3239430262091,
            "unit": "ns/iter",
            "extra": "iterations: 1262898\ncpu: 558.3259574407432 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 91706.62220197667,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 91663.58342009409 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 31725309.888888326,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 31725387.333333388 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 12353138512.999977,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12345299719 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 575.798289080897,
            "unit": "ns/iter",
            "extra": "iterations: 1234658\ncpu: 575.7523856808899 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 634.9576834749405,
            "unit": "ns/iter",
            "extra": "iterations: 563456\ncpu: 1263.85265042878 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 334.79959781995575,
            "unit": "ns/iter",
            "extra": "iterations: 1158312\ncpu: 688.2093589637318 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 95266.91768470392,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 95261.24781849854 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 65046.35854122331,
            "unit": "ns/iter",
            "extra": "iterations: 5772\ncpu: 102216.54643104618 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 29363.808203518256,
            "unit": "ns/iter",
            "extra": "iterations: 11812\ncpu: 48138.837707416365 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 29616835.181818925,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 29608782.727272853 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 21491224.659092207,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 36244449.77272733 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10633492.317708714,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 17864195.33333325 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10085193739.999908,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10083698032.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5210174758.750014,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 6397144517.499999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2556484773.8124924,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3138540951.75 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.95526371721616,
            "unit": "ns/iter",
            "extra": "iterations: 235567404\ncpu: 2.9550320892444244 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.058533680668699,
            "unit": "ns/iter",
            "extra": "iterations: 116438825\ncpu: 6.05633801268605 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 102.94827560247883,
            "unit": "ns/iter",
            "extra": "iterations: 7106743\ncpu: 102.94407494403563 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2276.995789692919,
            "unit": "ns/iter",
            "extra": "iterations: 316604\ncpu: 2276.719387626185 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 38201.038880935084,
            "unit": "ns/iter",
            "extra": "iterations: 18158\ncpu: 38198.51773323058 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 1048663.4373087978,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1048569.7538226253 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 25.089542412897867,
            "unit": "ns/iter",
            "extra": "iterations: 28023692\ncpu: 25.088415366540655 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 28.301970480142614,
            "unit": "ns/iter",
            "extra": "iterations: 24649373\ncpu: 28.299432525119247 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 416.3959280611794,
            "unit": "ns/iter",
            "extra": "iterations: 1640005\ncpu: 416.36242938283584 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6802.801629382337,
            "unit": "ns/iter",
            "extra": "iterations: 98074\ncpu: 6802.369506699066 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 109640.96249808338,
            "unit": "ns/iter",
            "extra": "iterations: 6533\ncpu: 109635.2383284878 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 2030121.5342858215,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2030030.7342857393 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 430.35791113139754,
            "unit": "ns/iter",
            "extra": "iterations: 1658448\ncpu: 430.26283850925535 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 503.9522458764075,
            "unit": "ns/iter",
            "extra": "iterations: 713708\ncpu: 1001.90047050053 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 256.5655351305052,
            "unit": "ns/iter",
            "extra": "iterations: 1574644\ncpu: 521.6863564081804 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6845.622652285721,
            "unit": "ns/iter",
            "extra": "iterations: 106806\ncpu: 6813.427288729164 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8703.5321916188,
            "unit": "ns/iter",
            "extra": "iterations: 42480\ncpu: 17270.443432203418 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4126.316256650767,
            "unit": "ns/iter",
            "extra": "iterations: 83452\ncpu: 8236.33772707681 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 110678.03279460192,
            "unit": "ns/iter",
            "extra": "iterations: 6373\ncpu: 110668.23238663047 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 155520.1753694522,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 305883.0650246261 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 81974.32793209939,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 160759.59283000312 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2221513.8619633294,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2221233.788343628 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2369767832.9999976,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2615435874.000007 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 831444398.2499995,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 998898695.2499963 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5c0a28393ea4c8916a0fb7f8d1b6e63ce0cbe19",
          "message": "Updated Version to 0.1.6",
          "timestamp": "2021-08-30T09:55:07Z",
          "tree_id": "727ad4d20f2ef440ca07e748b9dc8e31a3b7221e",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/d5c0a28393ea4c8916a0fb7f8d1b6e63ce0cbe19"
        },
        "date": 1630317801240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 5.999999643790943e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000033756e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 13.67300422839355,
            "unit": "ns/iter",
            "extra": "iterations: 51691962\ncpu: 13.522800875695145 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000172533e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 13.657557347964767,
            "unit": "ns/iter",
            "extra": "iterations: 51465210\ncpu: 13.656916138105723 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.2483376188667306,
            "unit": "ns/iter",
            "extra": "iterations: 215453149\ncpu: 3.248065313726282 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.020109480841945,
            "unit": "ns/iter",
            "extra": "iterations: 139411058\ncpu: 5.0198602968783135 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 241.16876263773491,
            "unit": "ns/iter",
            "extra": "iterations: 2899054\ncpu: 241.15612713664544 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 64243.04815992499,
            "unit": "ns/iter",
            "extra": "iterations: 11005\ncpu: 64220.67251249431 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 19294841.428571124,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 19293906.7857143 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10089289208.000025,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10088454406 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 17.716372853691105,
            "unit": "ns/iter",
            "extra": "iterations: 39501092\ncpu: 17.715284352138916 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 19.48966913500793,
            "unit": "ns/iter",
            "extra": "iterations: 35916160\ncpu: 19.489084495669992 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 403.0546850038342,
            "unit": "ns/iter",
            "extra": "iterations: 1730767\ncpu: 403.0292766155133 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 66418.93854009101,
            "unit": "ns/iter",
            "extra": "iterations: 10576\ncpu: 66413.33339636917 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 22467575.783782896,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 22466448.027027022 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10397527949.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10396741865 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 422.2099692879542,
            "unit": "ns/iter",
            "extra": "iterations: 1689890\ncpu: 422.2076531608561 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 602.7329397984005,
            "unit": "ns/iter",
            "extra": "iterations: 617226\ncpu: 1203.8594728673102 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 293.1733115337377,
            "unit": "ns/iter",
            "extra": "iterations: 1753396\ncpu: 599.7692215563382 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 66440.75486935658,
            "unit": "ns/iter",
            "extra": "iterations: 10525\ncpu: 66436.73045130653 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 56986.25471834901,
            "unit": "ns/iter",
            "extra": "iterations: 6888\ncpu: 91725.2857142858 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 20930.396914131357,
            "unit": "ns/iter",
            "extra": "iterations: 15652\ncpu: 37438.40244058245 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 24498803.44444308,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 24498821.55555556 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 18165174.875001356,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 30587635.80000016 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9323383.249999927,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 15060617.666666688 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10465458979.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10464631008.999994 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4699676482.000015,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5335233859 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2242138756.0624986,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2712143855.249999 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.116427773976334,
            "unit": "ns/iter",
            "extra": "iterations: 330963873\ncpu: 2.116146220587659 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.316778676250719,
            "unit": "ns/iter",
            "extra": "iterations: 162187312\ncpu: 4.316511078252543 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 72.81998528048874,
            "unit": "ns/iter",
            "extra": "iterations: 9622602\ncpu: 72.81596277181575 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1606.3086103675246,
            "unit": "ns/iter",
            "extra": "iterations: 438634\ncpu: 1606.2024421271497 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 27684.285637439978,
            "unit": "ns/iter",
            "extra": "iterations: 26026\ncpu: 27682.583301314175 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 801810.8754765516,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 801786.5705209635 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 17.43112119463985,
            "unit": "ns/iter",
            "extra": "iterations: 40166710\ncpu: 17.430615751202904 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 19.222124855661026,
            "unit": "ns/iter",
            "extra": "iterations: 36468143\ncpu: 19.221878805290643 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 295.3959236715349,
            "unit": "ns/iter",
            "extra": "iterations: 2369338\ncpu: 295.3854570348317 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 4818.044749686201,
            "unit": "ns/iter",
            "extra": "iterations: 145677\ncpu: 4817.825222924628 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 78405.23514934916,
            "unit": "ns/iter",
            "extra": "iterations: 8939\ncpu: 78404.14900995554 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1471878.3480176905,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 1471817.9911894326 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 305.34363872266636,
            "unit": "ns/iter",
            "extra": "iterations: 2298312\ncpu: 305.29273179620884 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 418.6332775001327,
            "unit": "ns/iter",
            "extra": "iterations: 771942\ncpu: 813.3704099530576 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 209.49797770823318,
            "unit": "ns/iter",
            "extra": "iterations: 1562460\ncpu: 421.0937777607256 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 4951.258408906503,
            "unit": "ns/iter",
            "extra": "iterations: 135630\ncpu: 4949.551493032416 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7725.530183264149,
            "unit": "ns/iter",
            "extra": "iterations: 45290\ncpu: 15415.049392802266 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3824.5082525397124,
            "unit": "ns/iter",
            "extra": "iterations: 103968\ncpu: 7692.713777316053 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 80513.58143039953,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 80501.44835980155 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 185333.01088058326,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 354256.7586032386 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 72311.2972972923,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 139698.0533033076 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1522492.197777865,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 1522339.8066666506 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2587865666.249996,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2775200743.000002 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 776186729.999992,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 904119053.7500008 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "68749f06cbac3f08a67a2bafe6284e75bc2dbcf8",
          "message": "Documentation Update",
          "timestamp": "2021-08-30T09:55:20Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/50/commits/68749f06cbac3f08a67a2bafe6284e75bc2dbcf8"
        },
        "date": 1630317837912,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999894978e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.18753602141765,
            "unit": "ns/iter",
            "extra": "iterations: 46139216\ncpu: 16.182242606809787 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 5.999999643790943e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.08659310677654,
            "unit": "ns/iter",
            "extra": "iterations: 44969434\ncpu: 15.08536058070022 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 4.999999987376214e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 4.999999998478444e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.529947555566528,
            "unit": "ns/iter",
            "extra": "iterations: 201849830\ncpu: 3.5290553080971137 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.9482603102159946,
            "unit": "ns/iter",
            "extra": "iterations: 114752930\ncpu: 5.947909826790478 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 284.04094273212127,
            "unit": "ns/iter",
            "extra": "iterations: 2621784\ncpu: 284.0271155060828 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71199.77044800985,
            "unit": "ns/iter",
            "extra": "iterations: 9732\ncpu: 71193.63193588168 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 30760041.476190466,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 30758418.857142873 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8800486290.000038,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8799786953 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 22.595188077300833,
            "unit": "ns/iter",
            "extra": "iterations: 29686969\ncpu: 22.594258005928435 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.699858736385707,
            "unit": "ns/iter",
            "extra": "iterations: 30807650\ncpu: 22.6973648103637 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 502.2677150000163,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 502.2465690000004 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 74860.50670966545,
            "unit": "ns/iter",
            "extra": "iterations: 9613\ncpu: 74850.08290856142 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 34156048.39130251,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 34152741.56521751 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9308383789.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9307614049.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 516.0039947659943,
            "unit": "ns/iter",
            "extra": "iterations: 1342757\ncpu: 515.950836971992 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 540.7424273826118,
            "unit": "ns/iter",
            "extra": "iterations: 757532\ncpu: 1067.250125407244 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 277.94178398489856,
            "unit": "ns/iter",
            "extra": "iterations: 989616\ncpu: 595.3060954956297 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 76624.40934721287,
            "unit": "ns/iter",
            "extra": "iterations: 9222\ncpu: 76617.92301019306 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 56519.62032473184,
            "unit": "ns/iter",
            "extra": "iterations: 6898\ncpu: 89147.3892432589 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 24322.86052526323,
            "unit": "ns/iter",
            "extra": "iterations: 17496\ncpu: 39770.26200274358 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 32762147.956522435,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 32756592.652174026 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 25803008.74999845,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 41335130.83333324 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 11361980.81250015,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 19528236.974999912 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8725783836.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8724915939.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4598023986.249998,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5311047474.5 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2354480216.8750005,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2899571302.2500005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3443972906659853,
            "unit": "ns/iter",
            "extra": "iterations: 309465010\ncpu: 2.3442583056481823 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.713649916741694,
            "unit": "ns/iter",
            "extra": "iterations: 141031417\ncpu: 4.713250736181702 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 91.04708490065488,
            "unit": "ns/iter",
            "extra": "iterations: 7088026\ncpu: 91.04101917797735 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2057.3229386380153,
            "unit": "ns/iter",
            "extra": "iterations: 360793\ncpu: 2057.04496484134 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 54471.38089999726,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54471.44130000012 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 865161.8149100156,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 865162.0385604105 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 21.208818578766767,
            "unit": "ns/iter",
            "extra": "iterations: 31073193\ncpu: 21.208638101658757 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 25.02575480580268,
            "unit": "ns/iter",
            "extra": "iterations: 28613883\ncpu: 25.02484972067554 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 372.32251064956944,
            "unit": "ns/iter",
            "extra": "iterations: 1977544\ncpu: 372.3048129396809 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5606.1095661358695,
            "unit": "ns/iter",
            "extra": "iterations: 124993\ncpu: 5605.840007040398 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 100674.81183179055,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 100669.16963649183 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1865423.1322312052,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 1865259.432506894 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 362.2297093001289,
            "unit": "ns/iter",
            "extra": "iterations: 1867321\ncpu: 362.1636858365637 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 477.29891732590085,
            "unit": "ns/iter",
            "extra": "iterations: 697994\ncpu: 950.9762562428543 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 234.6220958036978,
            "unit": "ns/iter",
            "extra": "iterations: 1415624\ncpu: 484.92312153508095 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5771.088031841159,
            "unit": "ns/iter",
            "extra": "iterations: 109290\ncpu: 5770.790914081973 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 6826.389538636931,
            "unit": "ns/iter",
            "extra": "iterations: 52670\ncpu: 13583.89453199173 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3988.936217561433,
            "unit": "ns/iter",
            "extra": "iterations: 86164\ncpu: 8332.747841325789 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 108635.42428888143,
            "unit": "ns/iter",
            "extra": "iterations: 5871\ncpu: 108609.45103048524 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 154817.52359389266,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 305982.02335558186 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 62492.49829826805,
            "unit": "ns/iter",
            "extra": "iterations: 4848\ncpu: 132863.39480198326 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1738539.5707195483,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 1738462.3349875833 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2122621532.5000055,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2345176973.499994 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 435749711.1875048,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 533499046.0000017 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "d769b7cfa1303a00cff0ffa22756f4cc895b1239",
          "message": "Documentation Update",
          "timestamp": "2021-08-30T09:55:20Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/50/commits/d769b7cfa1303a00cff0ffa22756f4cc895b1239"
        },
        "date": 1630317848977,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.302541368696016,
            "unit": "ns/iter",
            "extra": "iterations: 45247075\ncpu: 16.202331531927754 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.921858117469892,
            "unit": "ns/iter",
            "extra": "iterations: 42769804\ncpu: 16.920728909583033 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 0.0000011000000199601345,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.999999998593466e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.050291407529627,
            "unit": "ns/iter",
            "extra": "iterations: 181533058\ncpu: 4.050123746607079 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.021159831272194,
            "unit": "ns/iter",
            "extra": "iterations: 113586539\ncpu: 6.020872834236105 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 277.6811997377585,
            "unit": "ns/iter",
            "extra": "iterations: 2534954\ncpu: 277.6688926110692 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 76038.88701269568,
            "unit": "ns/iter",
            "extra": "iterations: 8824\ncpu: 76032.59916137799 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 22832673.3478268,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 22830430.565217398 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8170364319.000044,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8169694827.000001 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.080339973591894,
            "unit": "ns/iter",
            "extra": "iterations: 34864002\ncpu: 20.079681385975118 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.082732739153855,
            "unit": "ns/iter",
            "extra": "iterations: 31703604\ncpu: 22.082336538142506 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 456.85799307407433,
            "unit": "ns/iter",
            "extra": "iterations: 1532214\ncpu: 456.84327124017824 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75199.12443729794,
            "unit": "ns/iter",
            "extra": "iterations: 9330\ncpu: 75197.32647374042 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 25355232.060605608,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 25353106.939394 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10974180019.999949,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10972804769 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 468.0221246654511,
            "unit": "ns/iter",
            "extra": "iterations: 1496565\ncpu: 467.99653339480784 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 555.2916983171506,
            "unit": "ns/iter",
            "extra": "iterations: 629270\ncpu: 1104.8938277686836 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 290.0434575920198,
            "unit": "ns/iter",
            "extra": "iterations: 1145916\ncpu: 627.2148490814374 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75322.9913858045,
            "unit": "ns/iter",
            "extra": "iterations: 9287\ncpu: 75318.49187035653 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 56094.39745454424,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 90143.26593939378 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 25092.595754660142,
            "unit": "ns/iter",
            "extra": "iterations: 16524\ncpu: 44034.62170176702 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 25904083.8965524,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 25902808.620689556 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 19559901.02500067,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32507865.149999678 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8739522.712500047,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 16932465.824999996 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10377560498.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10374822754.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 3760572945.749999,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4631919084 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1944134195.1875017,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2371092640.5 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3963935990326104,
            "unit": "ns/iter",
            "extra": "iterations: 292160525\ncpu: 2.3962063697688234 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.900598319484072,
            "unit": "ns/iter",
            "extra": "iterations: 143208273\ncpu: 4.900481803868969 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 82.64530195549062,
            "unit": "ns/iter",
            "extra": "iterations: 8491682\ncpu: 82.64142910674248 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1821.1261049016975,
            "unit": "ns/iter",
            "extra": "iterations: 384989\ncpu: 1821.0616692944582 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30237.535462043223,
            "unit": "ns/iter",
            "extra": "iterations: 23645\ncpu: 30235.217593571724 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 861861.7249417523,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 861828.3962703989 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.75509840133625,
            "unit": "ns/iter",
            "extra": "iterations: 35416592\ncpu: 19.753398717753427 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.761474230281156,
            "unit": "ns/iter",
            "extra": "iterations: 32168977\ncpu: 21.760650424164854 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.90023566301136,
            "unit": "ns/iter",
            "extra": "iterations: 2088151\ncpu: 334.88065183025617 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5432.709620868632,
            "unit": "ns/iter",
            "extra": "iterations: 128346\ncpu: 5432.4477584030055 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88240.01508675065,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 88233.21523761742 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1640972.794457233,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 1640803.5334873472 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.1604723186212,
            "unit": "ns/iter",
            "extra": "iterations: 2023888\ncpu: 345.1380807633618 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 384.7904527668233,
            "unit": "ns/iter",
            "extra": "iterations: 773334\ncpu: 753.6256520468554 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 212.78273615066962,
            "unit": "ns/iter",
            "extra": "iterations: 1585640\ncpu: 437.67221374334895 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5971.26616083326,
            "unit": "ns/iter",
            "extra": "iterations: 110313\ncpu: 5970.7484974572635 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7311.724778722993,
            "unit": "ns/iter",
            "extra": "iterations: 47678\ncpu: 14593.98498259154 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3676.3360955871726,
            "unit": "ns/iter",
            "extra": "iterations: 96268\ncpu: 7351.9717351559175 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91211.44143790801,
            "unit": "ns/iter",
            "extra": "iterations: 7650\ncpu: 91141.98666666837 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 176513.51299133856,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 335467.15522984543 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 65077.20579953904,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 128160.41066066471 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1675759.8815165455,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 1675760.7867298739 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1759809196.0000205,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1923423981.5000117 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 717385370.8749931,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 917381084.4999994 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46abaa45e5a93e4a035f33fcf1319b73f119eb9e",
          "message": "Documentation Update (#50)\n\n* Updated Doxygen Documentation\r\n\r\n* [CodeFactor] Apply fixes to commit 68749f0\r\n\r\nCo-authored-by: codefactor-io <support@codefactor.io>",
          "timestamp": "2021-08-30T12:09:47+02:00",
          "tree_id": "9ee65018370bc3f8cfa6ed71c785466dbe7d6026",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/46abaa45e5a93e4a035f33fcf1319b73f119eb9e"
        },
        "date": 1630318679008,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.23242964753148,
            "unit": "ns/iter",
            "extra": "iterations: 41979266\ncpu: 15.231250589279005 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000172533e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.460854185695814,
            "unit": "ns/iter",
            "extra": "iterations: 45415558\ncpu: 15.45985860175934 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.999999809271685e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.434915660648347,
            "unit": "ns/iter",
            "extra": "iterations: 207808332\ncpu: 3.4346918438284755 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.887997096657422,
            "unit": "ns/iter",
            "extra": "iterations: 119175741\ncpu: 5.887639540667927 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 283.6901654410979,
            "unit": "ns/iter",
            "extra": "iterations: 2461178\ncpu: 283.65391694546264 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 70693.75303478575,
            "unit": "ns/iter",
            "extra": "iterations: 9803\ncpu: 70689.6005304498 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 28985900.857143015,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 28984681.57142859 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8180347541.000003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8179898661.999999 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.512268035716126,
            "unit": "ns/iter",
            "extra": "iterations: 32550647\ncpu: 20.511128365589798 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 27.190041925837285,
            "unit": "ns/iter",
            "extra": "iterations: 25374806\ncpu: 27.188618781952457 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 472.88584749688016,
            "unit": "ns/iter",
            "extra": "iterations: 1478855\ncpu: 472.85934253189066 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75224.17943548116,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 75219.16413662225 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 30970102.962963134,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 30968591.814814825 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9182747678.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9182316984 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 504.8883963690068,
            "unit": "ns/iter",
            "extra": "iterations: 1423744\ncpu: 504.85517831857464 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 478.3187771538926,
            "unit": "ns/iter",
            "extra": "iterations: 692810\ncpu: 948.1587159538699 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 304.11081218601987,
            "unit": "ns/iter",
            "extra": "iterations: 1191956\ncpu: 651.3908483199024 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 76962.63603603633,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 76935.97890831983 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58980.50593529625,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 93439.02908948621 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 26264.279051859136,
            "unit": "ns/iter",
            "extra": "iterations: 17856\ncpu: 41218.154905914 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 32338917.090909675,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 32333287.954545524 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 24566223.000000775,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 39300608.999999866 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10990420.062499594,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17684513.024999868 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8427311594.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8420194197.000001 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4448631723.5,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5051916467 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2201138148.3124986,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2593911595.499999 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.4364405684149424,
            "unit": "ns/iter",
            "extra": "iterations: 278293041\ncpu: 2.436105353421311 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.726898609649649,
            "unit": "ns/iter",
            "extra": "iterations: 147745707\ncpu: 4.726464830548333 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 96.07824615334549,
            "unit": "ns/iter",
            "extra": "iterations: 7230119\ncpu: 96.0706403310931 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1912.8712513991802,
            "unit": "ns/iter",
            "extra": "iterations: 359134\ncpu: 1912.7465235817158 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 51940.820356203134,
            "unit": "ns/iter",
            "extra": "iterations: 15553\ncpu: 51938.364302707116 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 750938.1854748431,
            "unit": "ns/iter",
            "extra": "iterations: 895\ncpu: 750939.6391061412 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 20.957738039985053,
            "unit": "ns/iter",
            "extra": "iterations: 33708801\ncpu: 20.95718948888139 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 23.799483761397894,
            "unit": "ns/iter",
            "extra": "iterations: 29431352\ncpu: 23.799317170342547 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 366.51354464599564,
            "unit": "ns/iter",
            "extra": "iterations: 1914225\ncpu: 366.50883830270703 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6078.229339084723,
            "unit": "ns/iter",
            "extra": "iterations: 119622\ncpu: 6078.082886091156 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 107432.08870490556,
            "unit": "ns/iter",
            "extra": "iterations: 6764\ncpu: 107068.00059136616 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1767196.473170776,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 1767079.392682928 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 362.1386753561145,
            "unit": "ns/iter",
            "extra": "iterations: 1819523\ncpu: 362.1262973867422 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 502.0988467128998,
            "unit": "ns/iter",
            "extra": "iterations: 938448\ncpu: 1000.8352023767014 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 205.8703255756627,
            "unit": "ns/iter",
            "extra": "iterations: 1523824\ncpu: 443.9344891535869 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5843.028295527653,
            "unit": "ns/iter",
            "extra": "iterations: 118676\ncpu: 5841.991009134091 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7909.425958346746,
            "unit": "ns/iter",
            "extra": "iterations: 43982\ncpu: 15736.934427720174 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3826.5022641871356,
            "unit": "ns/iter",
            "extra": "iterations: 83032\ncpu: 7704.742448694584 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 107251.4241866157,
            "unit": "ns/iter",
            "extra": "iterations: 6516\ncpu: 107238.81230816653 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 134421.72437357364,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 264410.04593774024 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 67084.35503246686,
            "unit": "ns/iter",
            "extra": "iterations: 4620\ncpu: 131923.18528138314 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1662513.271428506,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 1662391.8690476508 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2739549771.750006,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2988409452.999998 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 610587898.9375029,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 798432141.750005 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b2c7c21e38fbd97ce6f3f51ba5e2cc69264c2cb",
          "message": "Merge branch 'master' of https://github.com/ZigRazor/CXXGraph",
          "timestamp": "2021-09-03T07:46:10Z",
          "tree_id": "d4c2c57363f7f030a81dc655cf017aea2392434f",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/3b2c7c21e38fbd97ce6f3f51ba5e2cc69264c2cb"
        },
        "date": 1630655663250,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000062512e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.384223953748558,
            "unit": "ns/iter",
            "extra": "iterations: 45142464\ncpu: 15.382000747677397 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.488728706330894,
            "unit": "ns/iter",
            "extra": "iterations: 44952737\ncpu: 15.488034799749792 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 9.000000000813912e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.6808659921991755,
            "unit": "ns/iter",
            "extra": "iterations: 190173399\ncpu: 3.680741426933219 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.688709958320187,
            "unit": "ns/iter",
            "extra": "iterations: 123043133\ncpu: 5.688503632299416 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 265.51745256575657,
            "unit": "ns/iter",
            "extra": "iterations: 2681239\ncpu: 265.5081714088151 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71892.15295445544,
            "unit": "ns/iter",
            "extra": "iterations: 9748\ncpu: 71891.07468198608 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21857812.920000013,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21857413.71999999 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10448472885.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10447837925 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999975221272e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.077128579553055,
            "unit": "ns/iter",
            "extra": "iterations: 34867231\ncpu: 20.076195812624118 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.08434504411286,
            "unit": "ns/iter",
            "extra": "iterations: 31692852\ncpu: 22.083815902715237 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 456.9297990565853,
            "unit": "ns/iter",
            "extra": "iterations: 1531874\ncpu: 456.91428342017815 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75224.07650214812,
            "unit": "ns/iter",
            "extra": "iterations: 9320\ncpu: 75222.55493562251 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 25459739.303030483,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 25458479.66666673 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10998036103.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10997596480.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 469.0964023772502,
            "unit": "ns/iter",
            "extra": "iterations: 1492152\ncpu: 469.06208951902744 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 506.1774028277709,
            "unit": "ns/iter",
            "extra": "iterations: 696804\ncpu: 1011.1170960557065 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 274.51372636920433,
            "unit": "ns/iter",
            "extra": "iterations: 1241388\ncpu: 557.4159287829441 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75082.65879575246,
            "unit": "ns/iter",
            "extra": "iterations: 9317\ncpu: 75079.81506922797 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 59862.24539877482,
            "unit": "ns/iter",
            "extra": "iterations: 6846\ncpu: 95345.28863570008 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 24161.78122852221,
            "unit": "ns/iter",
            "extra": "iterations: 17460\ncpu: 34105.55252004575 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26184337.793103136,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 26154796.620689854 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 15913653.524999917,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 26653411.849999998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8946114.255208453,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 16082590.979166612 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10237359609.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10236406960.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 3602728969.4999924,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4622164076.000001 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1734156589.874999,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2370099222.750001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3963887951763367,
            "unit": "ns/iter",
            "extra": "iterations: 292262237\ncpu: 2.396174929024457 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.909251929284121,
            "unit": "ns/iter",
            "extra": "iterations: 142980373\ncpu: 4.908935613141798 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 82.49660599075199,
            "unit": "ns/iter",
            "extra": "iterations: 8482004\ncpu: 82.49084131533078 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1809.4184134269115,
            "unit": "ns/iter",
            "extra": "iterations: 384426\ncpu: 1809.4075036548136 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30128.89725158401,
            "unit": "ns/iter",
            "extra": "iterations: 23650\ncpu: 30126.795433403746 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 846522.4232558084,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 846466.3767441865 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.744888858469086,
            "unit": "ns/iter",
            "extra": "iterations: 35445751\ncpu: 19.74366730161818 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.751436686476328,
            "unit": "ns/iter",
            "extra": "iterations: 32183953\ncpu: 21.750709584991274 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 337.7775661499949,
            "unit": "ns/iter",
            "extra": "iterations: 2077022\ncpu: 337.7544234004245 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5477.845504811977,
            "unit": "ns/iter",
            "extra": "iterations: 128949\ncpu: 5477.679710583227 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88417.04076224162,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88414.0395002528 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1629762.169767578,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 1629666.5651162546 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.1176563841221,
            "unit": "ns/iter",
            "extra": "iterations: 2024854\ncpu: 345.08989388865285 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 459.56667770763994,
            "unit": "ns/iter",
            "extra": "iterations: 769860\ncpu: 916.6831164107492 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 214.18178957108495,
            "unit": "ns/iter",
            "extra": "iterations: 1510876\ncpu: 432.5331145640106 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5639.0467893944615,
            "unit": "ns/iter",
            "extra": "iterations: 122656\ncpu: 5637.705729846158 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7245.701015250595,
            "unit": "ns/iter",
            "extra": "iterations: 48658\ncpu: 14481.120555714882 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3500.006594246693,
            "unit": "ns/iter",
            "extra": "iterations: 92884\ncpu: 7434.617630593112 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91205.49018843216,
            "unit": "ns/iter",
            "extra": "iterations: 7695\ncpu: 91201.21819363283 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 272620.20714282524,
            "unit": "ns/iter",
            "extra": "iterations: 1050\ncpu: 505712.62761905533 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 64862.88063173171,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 133354.94074437002 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1683842.4489309536,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 1683459.9999999988 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2330305209.500011,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2495362595.500005 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 429768458.1875032,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 632442498.5000018 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32eadf7aaf90ca224aaa5e37f4f25b66bd314c02",
          "message": "Split End, need to rework the creation of the packages",
          "timestamp": "2021-09-07T12:09:31Z",
          "tree_id": "6f33fd24740dffd82b514ff98ba184249075ddd8",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/32eadf7aaf90ca224aaa5e37f4f25b66bd314c02"
        },
        "date": 1631017083641,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000062512e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.489983053795783,
            "unit": "ns/iter",
            "extra": "iterations: 45126328\ncpu: 15.489433751401178 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.517399744758759,
            "unit": "ns/iter",
            "extra": "iterations: 45116294\ncpu: 15.516818978970214 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.000001005508238e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.5981534223331035,
            "unit": "ns/iter",
            "extra": "iterations: 193977327\ncpu: 3.5980476109973414 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.0862159830151725,
            "unit": "ns/iter",
            "extra": "iterations: 112860199\ncpu: 6.085903330721577 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 260.8178108593784,
            "unit": "ns/iter",
            "extra": "iterations: 2683464\ncpu: 260.8018620708159 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 72043.89579261106,
            "unit": "ns/iter",
            "extra": "iterations: 9721\ncpu: 72040.53152967793 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21608865.680000234,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21607569.600000005 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10444734067.000013,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10444053259.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.079087545607283,
            "unit": "ns/iter",
            "extra": "iterations: 34865085\ncpu: 20.077968948017844 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 21.948268393653212,
            "unit": "ns/iter",
            "extra": "iterations: 31964482\ncpu: 21.946894462422332 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 477.3493074358031,
            "unit": "ns/iter",
            "extra": "iterations: 1497695\ncpu: 477.3323567214955 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75542.64039354959,
            "unit": "ns/iter",
            "extra": "iterations: 9249\ncpu: 75538.87944642665 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26037544.27272606,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26036502.1212121 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11587181493.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11586444303 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 467.14089102337243,
            "unit": "ns/iter",
            "extra": "iterations: 1498165\ncpu: 467.1153270834647 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 642.9258560556435,
            "unit": "ns/iter",
            "extra": "iterations: 525842\ncpu: 1280.816741530732 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 333.63012425178783,
            "unit": "ns/iter",
            "extra": "iterations: 1067912\ncpu: 716.1527747604625 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75879.5577467835,
            "unit": "ns/iter",
            "extra": "iterations: 9178\ncpu: 75863.58803660871 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 60137.664607443,
            "unit": "ns/iter",
            "extra": "iterations: 6394\ncpu: 96897.4832655615 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 24374.390967979405,
            "unit": "ns/iter",
            "extra": "iterations: 17676\ncpu: 40896.91502602406 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 24342152.185184844,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 24338421.444444373 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 16524427.692307707,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 28249968.192307897 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9252994.161458971,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 15788103.874999875 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10084754025.000051,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10083112063.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 3667951992.2500105,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4614667833.5 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1914123192.1250038,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2314037295.249999 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.4803434991997504,
            "unit": "ns/iter",
            "extra": "iterations: 283205900\ncpu: 2.473928230308774 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.025312160497088,
            "unit": "ns/iter",
            "extra": "iterations: 139437406\ncpu: 5.02511566372657 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.47899216222007,
            "unit": "ns/iter",
            "extra": "iterations: 8186754\ncpu: 85.47310643510214 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1831.6213632272775,
            "unit": "ns/iter",
            "extra": "iterations: 387947\ncpu: 1831.5477191472185 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30360.981099206663,
            "unit": "ns/iter",
            "extra": "iterations: 22962\ncpu: 30360.21026043014 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 858391.5030230954,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 858364.2769044728 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.751589214578253,
            "unit": "ns/iter",
            "extra": "iterations: 35454306\ncpu: 19.750526156117694 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.752664328860227,
            "unit": "ns/iter",
            "extra": "iterations: 32187468\ncpu: 21.752049555435615 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.63279667968015,
            "unit": "ns/iter",
            "extra": "iterations: 2091852\ncpu: 334.6303591267404 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5444.260580750896,
            "unit": "ns/iter",
            "extra": "iterations: 128110\ncpu: 5444.087994692125 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88483.8092529376,
            "unit": "ns/iter",
            "extra": "iterations: 7911\ncpu: 88480.5252180508 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1614282.782313029,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 1614270.0839002465 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.8957012464565,
            "unit": "ns/iter",
            "extra": "iterations: 2022028\ncpu: 345.84640222587353 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 516.2417907067826,
            "unit": "ns/iter",
            "extra": "iterations: 657852\ncpu: 1029.7542167539552 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 250.29427036868836,
            "unit": "ns/iter",
            "extra": "iterations: 1345104\ncpu: 501.70599596759325 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5627.573684946851,
            "unit": "ns/iter",
            "extra": "iterations: 121497\ncpu: 5627.108266047737 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8200.209637677326,
            "unit": "ns/iter",
            "extra": "iterations: 42614\ncpu: 16365.16271647853 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4106.2711528059945,
            "unit": "ns/iter",
            "extra": "iterations: 81384\ncpu: 8209.371817556303 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91291.58978388982,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 91289.60091683085 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 234174.60475352439,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 440455.2975352029 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 102191.4041666605,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 193730.65466667005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1701582.3293555786,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 1701426.3389020995 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3185649571.7500196,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3356574350 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 656609378.8750038,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 757661639.4999968 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76756cc7ea54b76489e01960f412416191a27f8e",
          "message": "Updated Doxyfile for Documentation of splitted Files",
          "timestamp": "2021-09-09T09:24:41Z",
          "tree_id": "2979475c64ddc193d1c083ee1d88a5a4b102b518",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/76756cc7ea54b76489e01960f412416191a27f8e"
        },
        "date": 1631179991888,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.52154094791473,
            "unit": "ns/iter",
            "extra": "iterations: 44966893\ncpu: 15.520371821108476 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 21.746599117177546,
            "unit": "ns/iter",
            "extra": "iterations: 32182232\ncpu: 21.746341273035384 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.999999809271685e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.518110805188871,
            "unit": "ns/iter",
            "extra": "iterations: 198344881\ncpu: 3.5180328147717606 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.102050475815723,
            "unit": "ns/iter",
            "extra": "iterations: 115350251\ncpu: 6.102005413061477 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 260.77837741987054,
            "unit": "ns/iter",
            "extra": "iterations: 2684379\ncpu: 260.77420476020717 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71871.67420349344,
            "unit": "ns/iter",
            "extra": "iterations: 9730\ncpu: 71869.578622816 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21658789.59999986,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21657206.999999978 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10574798186.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10574114945 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.075761941387437,
            "unit": "ns/iter",
            "extra": "iterations: 34872958\ncpu: 20.07543211562389 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 21.897132918280235,
            "unit": "ns/iter",
            "extra": "iterations: 31973766\ncpu: 21.896716889715062 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 457.0357557678361,
            "unit": "ns/iter",
            "extra": "iterations: 1531641\ncpu: 457.0237418559586 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75695.7774656984,
            "unit": "ns/iter",
            "extra": "iterations: 9257\ncpu: 75693.85351625827 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26017058.242425237,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26016973.999999944 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11885417924.999956,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11882160804.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 467.0597652159484,
            "unit": "ns/iter",
            "extra": "iterations: 1498313\ncpu: 467.0442157279515 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 590.6260548117378,
            "unit": "ns/iter",
            "extra": "iterations: 572140\ncpu: 1177.4548974027368 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 315.5058312404551,
            "unit": "ns/iter",
            "extra": "iterations: 1030484\ncpu: 687.2322801712536 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75601.45007032374,
            "unit": "ns/iter",
            "extra": "iterations: 9243\ncpu: 75594.60348371735 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 65749.96877648945,
            "unit": "ns/iter",
            "extra": "iterations: 7078\ncpu: 106141.75035320726 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 22686.547816996477,
            "unit": "ns/iter",
            "extra": "iterations: 20568\ncpu: 39922.18159276549 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26844618.89655189,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 26841594.27586214 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 19646648.750000395,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32826725.44999994 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8804518.924999982,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 15630718.549999934 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10218302270.000038,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10217482932.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5582106736.249997,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 6039674532.000003 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1730248431.8124948,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2920174852.000001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.5092192783211074,
            "unit": "ns/iter",
            "extra": "iterations: 278998465\ncpu: 2.5089050543701195 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.087681630301185,
            "unit": "ns/iter",
            "extra": "iterations: 138114551\ncpu: 5.087538690981257 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.46561348904102,
            "unit": "ns/iter",
            "extra": "iterations: 8195452\ncpu: 85.46383591777462 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1756.2658277281057,
            "unit": "ns/iter",
            "extra": "iterations: 389222\ncpu: 1756.2397449270634 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30459.1619092981,
            "unit": "ns/iter",
            "extra": "iterations: 23087\ncpu: 30455.187941265725 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 882071.6588380808,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 882022.3794808519 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.744202438108942,
            "unit": "ns/iter",
            "extra": "iterations: 35460596\ncpu: 19.743364804133595 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.74725879183769,
            "unit": "ns/iter",
            "extra": "iterations: 32193013\ncpu: 21.746541182709272 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.6046238165896,
            "unit": "ns/iter",
            "extra": "iterations: 2092038\ncpu: 334.595732486696 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5435.007743078971,
            "unit": "ns/iter",
            "extra": "iterations: 128631\ncpu: 5434.779625440299 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88879.99456452546,
            "unit": "ns/iter",
            "extra": "iterations: 7911\ncpu: 88875.27417519923 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1633570.8127854138,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 1633544.1164383711 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.76631060958994,
            "unit": "ns/iter",
            "extra": "iterations: 2024020\ncpu: 345.7154736613255 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 495.37416512801434,
            "unit": "ns/iter",
            "extra": "iterations: 701904\ncpu: 988.8879462148757 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 244.5744137769605,
            "unit": "ns/iter",
            "extra": "iterations: 1444672\ncpu: 494.85433164067575 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5623.924647715431,
            "unit": "ns/iter",
            "extra": "iterations: 122770\ncpu: 5623.772159322241 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7977.643461362774,
            "unit": "ns/iter",
            "extra": "iterations: 43740\ncpu: 15935.78102423404 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3695.6274359654444,
            "unit": "ns/iter",
            "extra": "iterations: 82924\ncpu: 8443.18326419352 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91160.79568063245,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 91154.90497382193 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 955187.528985482,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 1707830.983091789 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 1390304.0848213825,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2403925.0142856813 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1715132.4595239374,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 1715054.9023809736 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3897778977.999991,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4070945135.5000057 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 912263257.8749971,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1048060818.4999993 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "05270106d03e204d263fd8f6d4f8c9620a2e050e",
          "message": "Documentation Update",
          "timestamp": "2021-09-09T09:24:51Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/52/commits/05270106d03e204d263fd8f6d4f8c9620a2e050e"
        },
        "date": 1631180021122,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000062512e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.466761418540496,
            "unit": "ns/iter",
            "extra": "iterations: 45192422\ncpu: 15.46575346194103 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999999119823e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999999119823e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.475663508340045,
            "unit": "ns/iter",
            "extra": "iterations: 45144798\ncpu: 15.474978025153643 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.4729094663002886,
            "unit": "ns/iter",
            "extra": "iterations: 202730133\ncpu: 3.4727802205900997 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.038472194565004,
            "unit": "ns/iter",
            "extra": "iterations: 113105999\ncpu: 6.038217725303854 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 263.45589853433796,
            "unit": "ns/iter",
            "extra": "iterations: 2657372\ncpu: 263.4427648819961 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 72043.5760008238,
            "unit": "ns/iter",
            "extra": "iterations: 9717\ncpu: 72041.2810538232 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21607626.439999875,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21606098.359999992 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10461301047.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10460675523 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.081945328368516,
            "unit": "ns/iter",
            "extra": "iterations: 34852481\ncpu: 20.08103009940668 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.009935008735276,
            "unit": "ns/iter",
            "extra": "iterations: 31872745\ncpu: 22.00866037738509 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 461.35765282120894,
            "unit": "ns/iter",
            "extra": "iterations: 1517754\ncpu: 461.3459229888367 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75567.94984900748,
            "unit": "ns/iter",
            "extra": "iterations: 9272\ncpu: 75562.92267040578 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26062107.93939395,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26060895.87878783 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11617838931.999983,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11617179067.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 467.07125932262346,
            "unit": "ns/iter",
            "extra": "iterations: 1498639\ncpu: 467.04530310501787 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 648.4006611458458,
            "unit": "ns/iter",
            "extra": "iterations: 533014\ncpu: 1291.330372185341 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 289.4633946378889,
            "unit": "ns/iter",
            "extra": "iterations: 962680\ncpu: 649.1481769643103 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75369.43979734971,
            "unit": "ns/iter",
            "extra": "iterations: 9277\ncpu: 75350.08407890514 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58948.25632622054,
            "unit": "ns/iter",
            "extra": "iterations: 6560\ncpu: 94041.33185975613 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 24902.066303727577,
            "unit": "ns/iter",
            "extra": "iterations: 21032\ncpu: 35678.657712057786 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 24321353.111110546,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 24319834.185185127 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 17840776.346153356,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 30102074.038461603 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9376639.578124883,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 15939653.729166688 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10379095210.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10378505760.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4445979688.500003,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4835831138.999998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1604787092.2499995,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2314862882.500001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.547328630601934,
            "unit": "ns/iter",
            "extra": "iterations: 281778795\ncpu: 2.5471589230126415 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.040795600896626,
            "unit": "ns/iter",
            "extra": "iterations: 139375861\ncpu: 5.040658956000989 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.43088794416019,
            "unit": "ns/iter",
            "extra": "iterations: 8146965\ncpu: 85.42931410654236 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1822.8267126718388,
            "unit": "ns/iter",
            "extra": "iterations: 371262\ncpu: 1822.7215820633423 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 31344.059961928768,
            "unit": "ns/iter",
            "extra": "iterations: 22064\ncpu: 31342.569570340685 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 828012.7861409842,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 827971.1063321496 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.755735460744738,
            "unit": "ns/iter",
            "extra": "iterations: 35441137\ncpu: 19.754794717788176 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.762890842068078,
            "unit": "ns/iter",
            "extra": "iterations: 32170571\ncpu: 21.76230844643695 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.8585327772955,
            "unit": "ns/iter",
            "extra": "iterations: 2090562\ncpu: 334.8400047451339 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5436.452044209427,
            "unit": "ns/iter",
            "extra": "iterations: 128118\ncpu: 5436.222498009666 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 89273.62998729355,
            "unit": "ns/iter",
            "extra": "iterations: 7870\ncpu: 89271.96874205917 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1599360.504566226,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 1599321.4566210096 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 346.1510193046661,
            "unit": "ns/iter",
            "extra": "iterations: 2019563\ncpu: 346.13229198593103 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 510.12134268509084,
            "unit": "ns/iter",
            "extra": "iterations: 679802\ncpu: 1019.1609395088661 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 248.41858206643576,
            "unit": "ns/iter",
            "extra": "iterations: 1323440\ncpu: 513.5179517016394 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5621.206932043849,
            "unit": "ns/iter",
            "extra": "iterations: 122417\ncpu: 5620.688858573485 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8478.748148955186,
            "unit": "ns/iter",
            "extra": "iterations: 41328\ncpu: 16919.77710027074 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4263.381521815833,
            "unit": "ns/iter",
            "extra": "iterations: 84984\ncpu: 8704.74149251626 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91367.43875661756,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 91362.79867725061 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 401784.9035433178,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 728518.2414698418 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 86462.25365120442,
            "unit": "ns/iter",
            "extra": "iterations: 3492\ncpu: 164259.17153492983 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1713394.470449126,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 1713284.8061465563 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3294893886.7500033,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3468538391.000001 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1356018060.4374921,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1471390617.999999 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "fef37d5486cdc3f011f1033c61be9a760ebb42d0",
          "message": "Documentation Update",
          "timestamp": "2021-09-09T09:24:51Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/52/commits/fef37d5486cdc3f011f1033c61be9a760ebb42d0"
        },
        "date": 1631180067060,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.00000000020129e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.48587191188233,
            "unit": "ns/iter",
            "extra": "iterations: 45448400\ncpu: 15.477308706137064 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 14.660482660982062,
            "unit": "ns/iter",
            "extra": "iterations: 46516128\ncpu: 14.659345635991029 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.4399782574857674,
            "unit": "ns/iter",
            "extra": "iterations: 203799798\ncpu: 3.439700293520409 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.913276064752011,
            "unit": "ns/iter",
            "extra": "iterations: 121712927\ncpu: 5.912886730593537 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 303.3024149491183,
            "unit": "ns/iter",
            "extra": "iterations: 2359470\ncpu: 303.2751338224263 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 79985.07449823084,
            "unit": "ns/iter",
            "extra": "iterations: 8470\ncpu: 79981.39291617475 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 29192153.899998628,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 29188124.24999997 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8530311566.000023,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8529775261.000001 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 21.537690663676162,
            "unit": "ns/iter",
            "extra": "iterations: 32008391\ncpu: 21.536451488611235 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 28.67647882758302,
            "unit": "ns/iter",
            "extra": "iterations: 23670491\ncpu: 28.6748004509073 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 475.530657914656,
            "unit": "ns/iter",
            "extra": "iterations: 1438454\ncpu: 475.50938368553886 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 74763.35723444905,
            "unit": "ns/iter",
            "extra": "iterations: 9358\ncpu: 74759.85392177787 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 32095041.600000516,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 32086288.840000067 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9304199695.999954,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9303603787 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 494.767993126442,
            "unit": "ns/iter",
            "extra": "iterations: 1410622\ncpu: 494.6977475184692 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 495.32463879285945,
            "unit": "ns/iter",
            "extra": "iterations: 671360\ncpu: 985.3772298021954 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 278.43346191593065,
            "unit": "ns/iter",
            "extra": "iterations: 1061704\ncpu: 552.0985594855048 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 74761.86154495794,
            "unit": "ns/iter",
            "extra": "iterations: 9476\ncpu: 74751.02638243978 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58179.800841258,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 92049.4341624 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 23704.554103926646,
            "unit": "ns/iter",
            "extra": "iterations: 13548\ncpu: 41880.944936521846 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 32790627.85714175,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 32787307.476190396 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 22906597.730770253,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 36247574.0384613 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12083620.256250072,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 20027968.475000054 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8548244536.99996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8547031457.000003 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4769841783.499985,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5255107325.499999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2249239388.8124943,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2699306382.7500005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3322113751315636,
            "unit": "ns/iter",
            "extra": "iterations: 292803243\ncpu: 2.3315288417075215 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.769039265826706,
            "unit": "ns/iter",
            "extra": "iterations: 142595979\ncpu: 4.769054687018918 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 84.98136561370082,
            "unit": "ns/iter",
            "extra": "iterations: 8414444\ncpu: 84.97577308732427 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1925.484624954772,
            "unit": "ns/iter",
            "extra": "iterations: 362503\ncpu: 1925.3878202387195 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 49742.05286217192,
            "unit": "ns/iter",
            "extra": "iterations: 13923\ncpu: 49737.32500179571 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 850656.4918415032,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 830686.7878787755 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 20.89408849454818,
            "unit": "ns/iter",
            "extra": "iterations: 33602997\ncpu: 20.890446825323504 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 25.02335881180943,
            "unit": "ns/iter",
            "extra": "iterations: 28672306\ncpu: 25.021141724701366 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 371.661973737661,
            "unit": "ns/iter",
            "extra": "iterations: 1831976\ncpu: 371.56014489272496 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5984.435622899432,
            "unit": "ns/iter",
            "extra": "iterations: 106847\ncpu: 5984.448033168883 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 106323.96403416604,
            "unit": "ns/iter",
            "extra": "iterations: 6673\ncpu: 106323.02457665335 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1748120.9593908142,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 1747983.8147208227 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 364.69854882414955,
            "unit": "ns/iter",
            "extra": "iterations: 1898805\ncpu: 364.67087562965986 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 458.2357930271525,
            "unit": "ns/iter",
            "extra": "iterations: 859050\ncpu: 907.7106978639446 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 249.07905672811816,
            "unit": "ns/iter",
            "extra": "iterations: 1406392\ncpu: 508.134238533779 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6057.4753185185255,
            "unit": "ns/iter",
            "extra": "iterations: 118125\ncpu: 6057.329396825331 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7068.146492520896,
            "unit": "ns/iter",
            "extra": "iterations: 39316\ncpu: 13954.294104181221 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3792.899382589842,
            "unit": "ns/iter",
            "extra": "iterations: 93212\ncpu: 7564.787355705448 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 105594.49480538559,
            "unit": "ns/iter",
            "extra": "iterations: 6449\ncpu: 105502.60071328776 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 122829.00275189313,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 242339.41617272588 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 91850.93238054353,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 174877.19752559808 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1675509.8396947861,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 1675434.7531806442 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 481128441.00000983,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 643666777.9999983 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1264853128.9374957,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1540370853.2500029 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2b41ce41c3207e4d93d34ee8bf030c552717244",
          "message": "Modified Debian Packages for Splitted Files",
          "timestamp": "2021-09-09T09:28:29Z",
          "tree_id": "dd365191ee0e2bc3a94875452e12ffea2d42a0b6",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/e2b41ce41c3207e4d93d34ee8bf030c552717244"
        },
        "date": 1631180195029,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999894978e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 13.745402919003041,
            "unit": "ns/iter",
            "extra": "iterations: 50746713\ncpu: 13.718899212250456 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000172533e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 13.693969856121758,
            "unit": "ns/iter",
            "extra": "iterations: 50867244\ncpu: 13.693515929426015 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.0545961961945545,
            "unit": "ns/iter",
            "extra": "iterations: 228629829\ncpu: 3.0544190102158546 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.689427203169971,
            "unit": "ns/iter",
            "extra": "iterations: 123310040\ncpu: 5.689284870883181 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 244.64841243135024,
            "unit": "ns/iter",
            "extra": "iterations: 2939117\ncpu: 244.63988333911175 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 63532.4593414585,
            "unit": "ns/iter",
            "extra": "iterations: 10994\ncpu: 63530.48717482258 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 19109699.28571404,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 19108705.07142854 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10104292206.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10102587312 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 17.731868905549998,
            "unit": "ns/iter",
            "extra": "iterations: 39491466\ncpu: 17.730730203836902 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 19.427279356492924,
            "unit": "ns/iter",
            "extra": "iterations: 36025080\ncpu: 19.425839720550226 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 412.11663157554557,
            "unit": "ns/iter",
            "extra": "iterations: 1733107\ncpu: 412.08681345121835 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 66911.96918526916,
            "unit": "ns/iter",
            "extra": "iterations: 10482\ncpu: 66908.96136233519 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 22989791.78947335,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 22988675.210526247 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11044953294.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11044051995.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 412.1467515340494,
            "unit": "ns/iter",
            "extra": "iterations: 1660630\ncpu: 412.1258829480349 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 607.5381645530244,
            "unit": "ns/iter",
            "extra": "iterations: 579412\ncpu: 1212.421765514005 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 292.466435234947,
            "unit": "ns/iter",
            "extra": "iterations: 1395660\ncpu: 634.0527298912352 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 66717.87873880586,
            "unit": "ns/iter",
            "extra": "iterations: 10498\ncpu: 66699.38959801868 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58093.6060732117,
            "unit": "ns/iter",
            "extra": "iterations: 7212\ncpu: 93346.60219079278 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 23690.78029732376,
            "unit": "ns/iter",
            "extra": "iterations: 22568\ncpu: 40295.41572137539 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 23846646.909090176,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 23838537.27272733 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 16576543.250000954,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 27808923.74999999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 7052085.120535852,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 13666992.892857168 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9836086472.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9835178808.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4651386699.249997,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5391606617.499998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1784552741.4374979,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2540936248.7500005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.4606554890967796,
            "unit": "ns/iter",
            "extra": "iterations: 281020357\ncpu: 2.4604765234142802 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.029295529120074,
            "unit": "ns/iter",
            "extra": "iterations: 138989024\ncpu: 5.028997987639642 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.47136729887323,
            "unit": "ns/iter",
            "extra": "iterations: 8191735\ncpu: 85.46764794027166 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1830.2487340840546,
            "unit": "ns/iter",
            "extra": "iterations: 387269\ncpu: 1830.1846313544352 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 31096.829278445915,
            "unit": "ns/iter",
            "extra": "iterations: 21620\ncpu: 31095.549629972225 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 896921.8608924256,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 896874.88845145 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.772907141082072,
            "unit": "ns/iter",
            "extra": "iterations: 35358941\ncpu: 19.76592760512815 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.874149148528574,
            "unit": "ns/iter",
            "extra": "iterations: 32162047\ncpu: 21.810519958509158 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.93487073032827,
            "unit": "ns/iter",
            "extra": "iterations: 2090243\ncpu: 334.9206613776482 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5451.758219839824,
            "unit": "ns/iter",
            "extra": "iterations: 128348\ncpu: 5451.332845077473 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 89548.95167801992,
            "unit": "ns/iter",
            "extra": "iterations: 7926\ncpu: 89543.4986121627 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1693123.658932687,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 1693034.1647331647 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.71797460984106,
            "unit": "ns/iter",
            "extra": "iterations: 2020233\ncpu: 345.6885864155271 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 487.5379020911538,
            "unit": "ns/iter",
            "extra": "iterations: 724960\ncpu: 973.2597329508103 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 200.22132952838334,
            "unit": "ns/iter",
            "extra": "iterations: 1443384\ncpu: 417.1081458572334 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 4957.3744079350145,
            "unit": "ns/iter",
            "extra": "iterations: 134698\ncpu: 4956.75874177791 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7819.00059925342,
            "unit": "ns/iter",
            "extra": "iterations: 45056\ncpu: 15623.43605735043 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3978.195657557272,
            "unit": "ns/iter",
            "extra": "iterations: 88844\ncpu: 7953.342915672416 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 80627.50362997726,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 80606.4501170949 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 428862.0341163506,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 766528.7673378051 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 69248.97117117455,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 137890.04999999818 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1606188.2475960888,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 1606090.6586538283 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3164541280.4999895,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3333898570.499999 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 880246859.1250019,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1043488751.7499977 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3192e2fa8640ecdafcb93cdf904f06f7d17dd23f",
          "message": "Documentation Update (#52)\n\n* Updated Doxygen Documentation\r\n\r\n* [CodeFactor] Apply fixes to commit 0527010\r\n\r\nCo-authored-by: codefactor-io <support@codefactor.io>",
          "timestamp": "2021-09-09T11:37:32+02:00",
          "tree_id": "40ff0934e05c667559f597f01638f2a0ecfaf488",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/3192e2fa8640ecdafcb93cdf904f06f7d17dd23f"
        },
        "date": 1631180755605,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.749443026844903,
            "unit": "ns/iter",
            "extra": "iterations: 44825769\ncpu: 15.56748001356095 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.584332065771633,
            "unit": "ns/iter",
            "extra": "iterations: 45067626\ncpu: 15.556163375457144 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.999999809271685e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.5427488297367584,
            "unit": "ns/iter",
            "extra": "iterations: 197016364\ncpu: 3.5426370319168012 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.383808789312337,
            "unit": "ns/iter",
            "extra": "iterations: 94639396\ncpu: 7.383628790276728 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 291.32316921267784,
            "unit": "ns/iter",
            "extra": "iterations: 2512826\ncpu: 291.3152096484199 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71933.2499221575,
            "unit": "ns/iter",
            "extra": "iterations: 9635\ncpu: 71930.32693305651 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21616344.440000147,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21616216.200000018 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10559933957.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10559488060.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.073248714126446,
            "unit": "ns/iter",
            "extra": "iterations: 34872776\ncpu: 20.072614981956104 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 21.862726258835732,
            "unit": "ns/iter",
            "extra": "iterations: 32023335\ncpu: 21.862117296652578 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 457.1145607432201,
            "unit": "ns/iter",
            "extra": "iterations: 1500933\ncpu: 457.1042158444124 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75853.59668687766,
            "unit": "ns/iter",
            "extra": "iterations: 9236\ncpu: 75851.65786054551 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26041241.393939305,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26040587.090909123 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11874725936.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11874226650 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 473.92559818017344,
            "unit": "ns/iter",
            "extra": "iterations: 1467827\ncpu: 473.9047544431304 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 516.191214616248,
            "unit": "ns/iter",
            "extra": "iterations: 681598\ncpu: 1029.2137447586367 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 287.36825443106244,
            "unit": "ns/iter",
            "extra": "iterations: 1154128\ncpu: 637.4022751375912 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75726.61994172877,
            "unit": "ns/iter",
            "extra": "iterations: 9267\ncpu: 75723.12711772969 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58409.34784411237,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 91645.98894416862 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 35815.909055354765,
            "unit": "ns/iter",
            "extra": "iterations: 16620\ncpu: 66854.25800240706 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 27121469.586207606,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 27050702.827586032 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 17714185.125000626,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 29935522.450000037 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8828690.59821407,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 15645868.464285713 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10222786501.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10222254461.000006 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4952540492.500006,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5479312412 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2165096522.1875005,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2727002382.9999986 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.482376012922829,
            "unit": "ns/iter",
            "extra": "iterations: 281054734\ncpu: 2.482252471150323 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.021235084824145,
            "unit": "ns/iter",
            "extra": "iterations: 139471117\ncpu: 5.021103846182038 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.42804932075865,
            "unit": "ns/iter",
            "extra": "iterations: 8193710\ncpu: 85.42638951097828 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1854.9325769844975,
            "unit": "ns/iter",
            "extra": "iterations: 374783\ncpu: 1854.9254021660443 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 31158.20738499382,
            "unit": "ns/iter",
            "extra": "iterations: 22803\ncpu: 31157.70157435446 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 857033.488916222,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 856985.3374384175 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.74249128540509,
            "unit": "ns/iter",
            "extra": "iterations: 35456901\ncpu: 19.742398214666608 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.750039197526615,
            "unit": "ns/iter",
            "extra": "iterations: 32189531\ncpu: 21.74976264798663 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.60812604718825,
            "unit": "ns/iter",
            "extra": "iterations: 2091915\ncpu: 334.6045890965895 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5440.5263452263525,
            "unit": "ns/iter",
            "extra": "iterations: 128733\ncpu: 5440.429975220025 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 89227.84614411858,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 89224.9809102393 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1600787.2064220002,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 1600732.5481651358 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.91550443951405,
            "unit": "ns/iter",
            "extra": "iterations: 2017893\ncpu: 345.7553299406918 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 449.3320482296843,
            "unit": "ns/iter",
            "extra": "iterations: 756878\ncpu: 898.3539725028064 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 230.08369947071233,
            "unit": "ns/iter",
            "extra": "iterations: 1495568\ncpu: 465.2338850523619 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5619.421144231847,
            "unit": "ns/iter",
            "extra": "iterations: 121811\ncpu: 5619.029348745149 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7156.413614374426,
            "unit": "ns/iter",
            "extra": "iterations: 49198\ncpu: 14292.524269279029 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3335.750745986287,
            "unit": "ns/iter",
            "extra": "iterations: 95176\ncpu: 7078.481066655519 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91277.68794419502,
            "unit": "ns/iter",
            "extra": "iterations: 7598\ncpu: 91273.13964200889 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 429793.9801205075,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 758937.4831325309 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 1391092.2243589642,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 2367918.1378205046 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1711919.1355933202,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 1711859.3656174655 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2991751283.499994,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3150604678.4999967 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 496145198.1875058,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 714299816.2500006 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d383929b3f7bd2d6ac346e8629bda7d00bda7c7f",
          "message": "Update README.md",
          "timestamp": "2021-09-14T16:08:16+02:00",
          "tree_id": "4d95843b142df31ab1deb08e7eafceff78cd3e86",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/d383929b3f7bd2d6ac346e8629bda7d00bda7c7f"
        },
        "date": 1631629002872,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.522068580183356,
            "unit": "ns/iter",
            "extra": "iterations: 45068033\ncpu: 15.521591634584984 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.009999987734773e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.530026111517348,
            "unit": "ns/iter",
            "extra": "iterations: 44992789\ncpu: 15.529331889161178 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.534934707653195,
            "unit": "ns/iter",
            "extra": "iterations: 201872435\ncpu: 3.5348934935074214 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.063146126465527,
            "unit": "ns/iter",
            "extra": "iterations: 115237599\ncpu: 6.062841746642086 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 260.97636771144533,
            "unit": "ns/iter",
            "extra": "iterations: 2683278\ncpu: 260.93863140531835 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71885.34664340215,
            "unit": "ns/iter",
            "extra": "iterations: 9742\ncpu: 71880.99486758371 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21592574.000001147,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21591290.51999997 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10503679505.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10502991488.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.07560638429701,
            "unit": "ns/iter",
            "extra": "iterations: 34870997\ncpu: 20.074801273964116 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 21.980666816258328,
            "unit": "ns/iter",
            "extra": "iterations: 31828798\ncpu: 21.979778689726167 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 457.1270247960288,
            "unit": "ns/iter",
            "extra": "iterations: 1527623\ncpu: 457.0983344712685 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75736.67688653868,
            "unit": "ns/iter",
            "extra": "iterations: 9263\ncpu: 75733.35819928758 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26018629.81818344,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26017488.818181835 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11696827038.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11696084467.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 467.0534375078844,
            "unit": "ns/iter",
            "extra": "iterations: 1499022\ncpu: 467.0225787213236 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 608.2336100730668,
            "unit": "ns/iter",
            "extra": "iterations: 568886\ncpu: 1215.302276730307 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 314.0331773533592,
            "unit": "ns/iter",
            "extra": "iterations: 1153460\ncpu: 698.9262774608544 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75830.71212284167,
            "unit": "ns/iter",
            "extra": "iterations: 9247\ncpu: 75817.66832486194 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 62401.6256885372,
            "unit": "ns/iter",
            "extra": "iterations: 7988\ncpu: 101182.57699048577 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 25158.9111756163,
            "unit": "ns/iter",
            "extra": "iterations: 13780\ncpu: 45921.05863570384 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26986098.689654868,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 26984809.65517253 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 19269157.67499793,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32008381.700000055 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8781048.312500253,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 14107742.32692304 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10094261464.999931,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10090765331 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4004889467.7500186,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4960061013.499999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1868324902.062497,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2359381580.25 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.480869161012976,
            "unit": "ns/iter",
            "extra": "iterations: 281157664\ncpu: 2.480812011583642 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.41219606436438,
            "unit": "ns/iter",
            "extra": "iterations: 129382492\ncpu: 5.411968035056851 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 85.56156906304638,
            "unit": "ns/iter",
            "extra": "iterations: 8185369\ncpu: 85.55730719042714 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1843.4007878667862,
            "unit": "ns/iter",
            "extra": "iterations: 380775\ncpu: 1843.3451040640828 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30640.662978213837,
            "unit": "ns/iter",
            "extra": "iterations: 23316\ncpu: 30639.14226282362 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 887395.1978155903,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 887324.0109223343 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.746688596041697,
            "unit": "ns/iter",
            "extra": "iterations: 35447125\ncpu: 19.746192081868426 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.756938320276184,
            "unit": "ns/iter",
            "extra": "iterations: 32183510\ncpu: 21.756812448362567 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.7853228461459,
            "unit": "ns/iter",
            "extra": "iterations: 2091182\ncpu: 334.77027537535844 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5424.745514261171,
            "unit": "ns/iter",
            "extra": "iterations: 128184\ncpu: 5424.5014042314015 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88437.79524772317,
            "unit": "ns/iter",
            "extra": "iterations: 7912\ncpu: 88433.37639029311 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1614472.5799086206,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 1614452.0570776162 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.78649230151507,
            "unit": "ns/iter",
            "extra": "iterations: 2023646\ncpu: 345.689439259638 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 467.92027369819175,
            "unit": "ns/iter",
            "extra": "iterations: 742716\ncpu: 933.2530819317462 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 238.702254487814,
            "unit": "ns/iter",
            "extra": "iterations: 1445916\ncpu: 489.38535986874945 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5615.126416768073,
            "unit": "ns/iter",
            "extra": "iterations: 124050\ncpu: 5613.546771463225 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7684.109286706871,
            "unit": "ns/iter",
            "extra": "iterations: 46012\ncpu: 15338.630574632469 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3871.588160223441,
            "unit": "ns/iter",
            "extra": "iterations: 88152\ncpu: 7865.516199292024 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91312.64965318864,
            "unit": "ns/iter",
            "extra": "iterations: 7641\ncpu: 91300.22379269675 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 145726.02769533035,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 284972.0662710127 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 73934.56404259945,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 140759.9820859853 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1735189.9184651286,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 1735036.8201438468 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3590752696.5000043,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3767238203.0000033 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1508513159.6249967,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1739227022.2500012 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e7fae51ec56b6b067ca48c7eb23c7ff301bafe6",
          "message": "Merge branch 'master' of https://github.com/ZigRazor/CXXGraph",
          "timestamp": "2021-09-16T09:42:00Z",
          "tree_id": "16c7a3e26e9b7dcc80597b975def92c10348461f",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/6e7fae51ec56b6b067ca48c7eb23c7ff301bafe6"
        },
        "date": 1631785845635,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.433892716679654,
            "unit": "ns/iter",
            "extra": "iterations: 41642522\ncpu: 16.41222275154228 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.629075057905723,
            "unit": "ns/iter",
            "extra": "iterations: 42821232\ncpu: 16.62638249175082 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.80136317960134,
            "unit": "ns/iter",
            "extra": "iterations: 191760792\ncpu: 3.8009663049368294 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.288633480058219,
            "unit": "ns/iter",
            "extra": "iterations: 106210371\ncpu: 6.287523418970073 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 293.78942041694796,
            "unit": "ns/iter",
            "extra": "iterations: 2330848\ncpu: 293.77671946004233 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 75167.13244278931,
            "unit": "ns/iter",
            "extra": "iterations: 9657\ncpu: 75152.21994408198 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 32171348.349999107,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32169997.45 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 9453827471.000011,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9444361081.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 22.650298341099532,
            "unit": "ns/iter",
            "extra": "iterations: 29885423\ncpu: 22.64904662718007 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 23.537073023692148,
            "unit": "ns/iter",
            "extra": "iterations: 29097721\ncpu: 23.534598362531526 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 509.7112502333261,
            "unit": "ns/iter",
            "extra": "iterations: 1382318\ncpu: 509.661931624995 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 81427.06470765935,
            "unit": "ns/iter",
            "extra": "iterations: 9937\ncpu: 81420.78736037045 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 36056173.590909876,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 36052664.09090905 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10233693571.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10232776487.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 521.2123220983432,
            "unit": "ns/iter",
            "extra": "iterations: 1417356\ncpu: 520.2444191861483 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 622.5199324547527,
            "unit": "ns/iter",
            "extra": "iterations: 634242\ncpu: 1206.603383251182 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 325.66632600299147,
            "unit": "ns/iter",
            "extra": "iterations: 1050156\ncpu: 750.442630428239 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 79300.6504268673,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 79287.68457598197 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 61836.247823030266,
            "unit": "ns/iter",
            "extra": "iterations: 7120\ncpu: 97262.11825842674 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 38914.51566570323,
            "unit": "ns/iter",
            "extra": "iterations: 13820\ncpu: 75701.241316932 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 33945913.69999773,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 33943444.09999981 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 26804020.472222116,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 43061906.2222225 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12327535.693749782,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 20980642.45000013 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9200771823.000025,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9200164008.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4945958434.000005,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5672845003.500001 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2457276172.312497,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2970312256.0000005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3971594315780256,
            "unit": "ns/iter",
            "extra": "iterations: 292963054\ncpu: 2.3969641305009075 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.380355853864334,
            "unit": "ns/iter",
            "extra": "iterations: 123803742\ncpu: 5.380006219844327 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 93.56364299235703,
            "unit": "ns/iter",
            "extra": "iterations: 8080544\ncpu: 93.5540768047295 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2148.430678526416,
            "unit": "ns/iter",
            "extra": "iterations: 342448\ncpu: 2148.239706466393 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 62626.60854716617,
            "unit": "ns/iter",
            "extra": "iterations: 10834\ncpu: 62576.67149713849 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 887069.235135091,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 887022.7445945878 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 22.615458973076194,
            "unit": "ns/iter",
            "extra": "iterations: 30456732\ncpu: 22.61301268304167 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.000416639194423,
            "unit": "ns/iter",
            "extra": "iterations: 28149056\ncpu: 25.9991732937685 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 364.3682922487963,
            "unit": "ns/iter",
            "extra": "iterations: 1853900\ncpu: 364.3249803117717 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6459.843762394323,
            "unit": "ns/iter",
            "extra": "iterations: 118499\ncpu: 6459.581228533561 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 117708.36721534711,
            "unit": "ns/iter",
            "extra": "iterations: 5893\ncpu: 117697.62362124368 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1890056.8940809134,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 1889993.5887849825 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 390.2585325272659,
            "unit": "ns/iter",
            "extra": "iterations: 1894427\ncpu: 390.210760298504 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 469.0438297317523,
            "unit": "ns/iter",
            "extra": "iterations: 759108\ncpu: 926.9239963219978 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 266.96503922732165,
            "unit": "ns/iter",
            "extra": "iterations: 1379396\ncpu: 536.5936997062608 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6066.119321788843,
            "unit": "ns/iter",
            "extra": "iterations: 113416\ncpu: 6065.595568526472 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8702.78085902939,
            "unit": "ns/iter",
            "extra": "iterations: 40604\ncpu: 17322.039060191466 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3715.0370518565137,
            "unit": "ns/iter",
            "extra": "iterations: 90596\ncpu: 7504.217658616196 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 125076.90107375395,
            "unit": "ns/iter",
            "extra": "iterations: 5681\ncpu: 124911.5819398019 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 157069.8606801889,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 308316.80548925814 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 78251.2439453098,
            "unit": "ns/iter",
            "extra": "iterations: 5120\ncpu: 151083.7443359374 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1890358.7213620453,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 1890246.0588235494 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1843557353.2499917,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2105158110.0000067 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 248627438.99998918,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 333917566.2500055 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3b71ec4d202d0b10af97887ef5028ecfe416b8d",
          "message": "Update SECURITY.md",
          "timestamp": "2021-09-17T11:59:28+02:00",
          "tree_id": "ecb383036f7cc723251b96b774d860b5000ae58e",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/b3b71ec4d202d0b10af97887ef5028ecfe416b8d"
        },
        "date": 1631873318225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.526430484461535,
            "unit": "ns/iter",
            "extra": "iterations: 38139142\ncpu: 18.272235751921215 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999998009599e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.246288198729626,
            "unit": "ns/iter",
            "extra": "iterations: 38460572\ncpu: 18.24515251619243 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.055756738910014,
            "unit": "ns/iter",
            "extra": "iterations: 171613767\ncpu: 4.055431980582303 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 8.614555583566437,
            "unit": "ns/iter",
            "extra": "iterations: 80623425\ncpu: 8.614305222086514 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 341.61779153197773,
            "unit": "ns/iter",
            "extra": "iterations: 2125573\ncpu: 341.5949431047535 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 84445.15951446824,
            "unit": "ns/iter",
            "extra": "iterations: 8156\ncpu: 84444.37996566946 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 25432413.85714217,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 25430315.571428567 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11777090240.000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11776361089.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 0.000016701999982160487,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 0.00001679999999737447 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.232268316912837,
            "unit": "ns/iter",
            "extra": "iterations: 30000226\ncpu: 23.231379090277482 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 25.60500257253096,
            "unit": "ns/iter",
            "extra": "iterations: 27608995\ncpu: 25.604212648812528 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 547.1055607533589,
            "unit": "ns/iter",
            "extra": "iterations: 1301838\ncpu: 547.0806651826109 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 87686.2773904418,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 87681.11217629473 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 30187351.535713803,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 30184727.607142873 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13144945109.000048,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13144058081 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 544.3446995779772,
            "unit": "ns/iter",
            "extra": "iterations: 1307028\ncpu: 544.3115610377172 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 689.7879867157646,
            "unit": "ns/iter",
            "extra": "iterations: 513390\ncpu: 1372.02157618964 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 351.2137294575436,
            "unit": "ns/iter",
            "extra": "iterations: 938544\ncpu: 749.600092270581 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 88967.61818870048,
            "unit": "ns/iter",
            "extra": "iterations: 7928\ncpu: 88965.04654389509 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 78015.26989780291,
            "unit": "ns/iter",
            "extra": "iterations: 6458\ncpu: 126155.0723134093 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 28305.954391107887,
            "unit": "ns/iter",
            "extra": "iterations: 17228\ncpu: 43502.67512189452 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 31879358.833334,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 31877487.66666676 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 21448172.041665714,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 35964225.95833353 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 11250972.357954742,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 18153412.06818182 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10803849091.000017,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10802880656.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4543174675.75001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5730395285.999999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2462308726.8749976,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2847965167.000001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.9653387205468893,
            "unit": "ns/iter",
            "extra": "iterations: 217968959\ncpu: 2.9651342785923847 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.866548452040994,
            "unit": "ns/iter",
            "extra": "iterations: 119510311\ncpu: 5.8663427208385075 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 100.2676005978452,
            "unit": "ns/iter",
            "extra": "iterations: 6924850\ncpu: 100.26237766883058 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2113.8814104804487,
            "unit": "ns/iter",
            "extra": "iterations: 329051\ncpu: 2113.8581131800033 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 36773.78344593018,
            "unit": "ns/iter",
            "extra": "iterations: 18799\ncpu: 36772.48305760951 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 941621.3425559115,
            "unit": "ns/iter",
            "extra": "iterations: 759\ncpu: 941568.9104084293 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.90490569967099,
            "unit": "ns/iter",
            "extra": "iterations: 29328477\ncpu: 23.903798004921956 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.91292842152139,
            "unit": "ns/iter",
            "extra": "iterations: 26192370\ncpu: 26.91147872452957 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 404.6981570834512,
            "unit": "ns/iter",
            "extra": "iterations: 1733448\ncpu: 404.6985009068636 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6496.029749748754,
            "unit": "ns/iter",
            "extra": "iterations: 107732\ncpu: 6495.6381669327775 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 106823.00526711794,
            "unit": "ns/iter",
            "extra": "iterations: 6645\ncpu: 106819.62738901368 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1868018.3521852146,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 1867951.7866324328 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 403.49060350152814,
            "unit": "ns/iter",
            "extra": "iterations: 1591976\ncpu: 403.4260692372155 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 584.4346000302828,
            "unit": "ns/iter",
            "extra": "iterations: 593670\ncpu: 1166.8731584887162 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 275.19960079205197,
            "unit": "ns/iter",
            "extra": "iterations: 1569608\ncpu: 545.5476615817593 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6618.447391688311,
            "unit": "ns/iter",
            "extra": "iterations: 102921\ncpu: 6617.901128049646 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9015.449622199814,
            "unit": "ns/iter",
            "extra": "iterations: 39174\ncpu: 17800.665415836716 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4577.80784997052,
            "unit": "ns/iter",
            "extra": "iterations: 74892\ncpu: 9140.689579661257 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 108178.17544707988,
            "unit": "ns/iter",
            "extra": "iterations: 6207\ncpu: 108149.89544063207 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 231670.31173378613,
            "unit": "ns/iter",
            "extra": "iterations: 1142\ncpu: 437851.85376531404 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 80772.68811425917,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 159697.68212531213 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1983817.5189189878,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 1983817.8972972825 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1529640919.249971,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1780285844.50001 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1372315334.6250072,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1504503846.2500012 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e5f6f0c765a050f79d1afce5f60ad882149458c",
          "message": "Merge branch 'master' of https://github.com/ZigRazor/CXXGraph",
          "timestamp": "2021-09-21T07:12:18Z",
          "tree_id": "435a2435e594d97fba0464e081cdeee05f344a61",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/1e5f6f0c765a050f79d1afce5f60ad882149458c"
        },
        "date": 1632208910249,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.818569743786146,
            "unit": "ns/iter",
            "extra": "iterations: 37628349\ncpu: 18.690624507601967 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.999999749903509e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.607044972757826,
            "unit": "ns/iter",
            "extra": "iterations: 37693886\ncpu: 18.57518359874065 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.082394643084332,
            "unit": "ns/iter",
            "extra": "iterations: 169334613\ncpu: 4.082258274036388 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.426338455145917,
            "unit": "ns/iter",
            "extra": "iterations: 93844441\ncpu: 7.426109650970161 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 313.19363388814395,
            "unit": "ns/iter",
            "extra": "iterations: 2234268\ncpu: 313.1707373511147 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 86223.609413502,
            "unit": "ns/iter",
            "extra": "iterations: 8116\ncpu: 86219.54300147851 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 25913708.809525814,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 25912467.761904784 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11946097517.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11945299951 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 24.03496297831566,
            "unit": "ns/iter",
            "extra": "iterations: 29044465\ncpu: 24.03400186575992 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 26.31849678948036,
            "unit": "ns/iter",
            "extra": "iterations: 26620463\ncpu: 26.317400001645296 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 546.6983537264301,
            "unit": "ns/iter",
            "extra": "iterations: 1286056\ncpu: 546.6802534259763 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 90557.48445193026,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90557.61557398287 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 31131094.785714757,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 31115145.82142862 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13560515125.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13559781202 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 562.0012411360506,
            "unit": "ns/iter",
            "extra": "iterations: 1245633\ncpu: 561.9807888840421 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 693.5034309994135,
            "unit": "ns/iter",
            "extra": "iterations: 491402\ncpu: 1368.7058172331501 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 341.2681804052782,
            "unit": "ns/iter",
            "extra": "iterations: 1187116\ncpu: 764.2088532207464 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 91304.8179586572,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 91297.38837209286 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 74568.79474708272,
            "unit": "ns/iter",
            "extra": "iterations: 5654\ncpu: 119203.3919349134 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 27884.382376185422,
            "unit": "ns/iter",
            "extra": "iterations: 15184\ncpu: 43290.59444151741 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 31560958.3750008,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 31558521.374999892 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 22374964.96153732,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 37156262.307692446 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 11114888.749999588,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 18549630.437500075 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11656600537.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11656100717.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4167871745.250011,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5800609128.499998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2220682218.8124847,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3084421080.2499995 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.898899725055707,
            "unit": "ns/iter",
            "extra": "iterations: 226543103\ncpu: 2.8987981549807005 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.3155858816772374,
            "unit": "ns/iter",
            "extra": "iterations: 110759958\ncpu: 6.313601084969713 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 99.99934873686809,
            "unit": "ns/iter",
            "extra": "iterations: 7055520\ncpu: 99.99438524729656 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2251.7087936670664,
            "unit": "ns/iter",
            "extra": "iterations: 319605\ncpu: 2251.5415653697505 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 36811.50659603258,
            "unit": "ns/iter",
            "extra": "iterations: 19254\ncpu: 36808.94032408877 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 1016738.1916083039,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1012707.5104895051 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.715064279089898,
            "unit": "ns/iter",
            "extra": "iterations: 29522820\ncpu: 23.71355693663444 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.158668519860388,
            "unit": "ns/iter",
            "extra": "iterations: 26804876\ncpu: 26.155558414073827 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 401.87103547972345,
            "unit": "ns/iter",
            "extra": "iterations: 1742487\ncpu: 401.84113339152276 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6526.085477512194,
            "unit": "ns/iter",
            "extra": "iterations: 107034\ncpu: 6525.489115608048 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 105823.97730024172,
            "unit": "ns/iter",
            "extra": "iterations: 6608\ncpu: 105816.8963377716 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1953628.1891889204,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 1953537.4162162528 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 426.30879268073795,
            "unit": "ns/iter",
            "extra": "iterations: 1622247\ncpu: 426.27895012288116 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 552.8939674646779,
            "unit": "ns/iter",
            "extra": "iterations: 659590\ncpu: 1102.011958944204 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 273.88884197241896,
            "unit": "ns/iter",
            "extra": "iterations: 1377152\ncpu: 551.6824482700634 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 7029.220004882897,
            "unit": "ns/iter",
            "extra": "iterations: 94207\ncpu: 7029.217818209067 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8988.681430268029,
            "unit": "ns/iter",
            "extra": "iterations: 40426\ncpu: 17798.01563350273 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4049.9014728858315,
            "unit": "ns/iter",
            "extra": "iterations: 71696\ncpu: 8470.812290783339 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 110935.7436764958,
            "unit": "ns/iter",
            "extra": "iterations: 6207\ncpu: 110932.43998711309 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 214561.77272728088,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 408807.29577466473 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 87667.01392352028,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 173255.35931005664 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2058870.438395323,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2058758.1719197445 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1651854631.2499893,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1873159674.9999957 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1492469993.4375029,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1744791498.2500002 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bffed689a57a35775b29a6a8391ab8146deff99",
          "message": "First Test on Partitioning HDRF\n\nprogess on Implementation of HDRF Graph Partitioning #9\n\nTo review the memory management of the class ( especially for mutex pointer )",
          "timestamp": "2021-09-21T14:00:07Z",
          "tree_id": "911a8c6eb9ed747ecf7ef591afd0ddb110cc7e82",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/5bffed689a57a35775b29a6a8391ab8146deff99"
        },
        "date": 1632233332814,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.00000000020129e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.23491338606343,
            "unit": "ns/iter",
            "extra": "iterations: 45259460\ncpu: 16.233569666982326 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.913858844188328,
            "unit": "ns/iter",
            "extra": "iterations: 43921224\ncpu: 15.913296086648225 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.784778684866245,
            "unit": "ns/iter",
            "extra": "iterations: 192080538\ncpu: 3.7844403215905187 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.286960863166813,
            "unit": "ns/iter",
            "extra": "iterations: 115564076\ncpu: 6.286773175082541 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 306.2802088354645,
            "unit": "ns/iter",
            "extra": "iterations: 2319338\ncpu: 306.269208282708 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 75881.27484189243,
            "unit": "ns/iter",
            "extra": "iterations: 9329\ncpu: 75879.91349555153 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 29696395.809521295,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 29695710.1904762 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8625004165.000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8624456283 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 22.57371604776725,
            "unit": "ns/iter",
            "extra": "iterations: 28863749\ncpu: 22.572427337834792 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 29.473350074208533,
            "unit": "ns/iter",
            "extra": "iterations: 23508527\ncpu: 29.4713335718566 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 498.75397327870314,
            "unit": "ns/iter",
            "extra": "iterations: 1352032\ncpu: 498.7302948450945 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 78354.95910305606,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 78353.05193447182 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 33745199.434782125,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 33744081.95652162 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9574451869.999962,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9573422480.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 532.1240726084922,
            "unit": "ns/iter",
            "extra": "iterations: 1302713\ncpu: 532.0962215008232 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 503.06261831508687,
            "unit": "ns/iter",
            "extra": "iterations: 746946\ncpu: 996.9027520061699 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 272.6479741332885,
            "unit": "ns/iter",
            "extra": "iterations: 1191416\ncpu: 577.9587004035518 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 79359.87201026327,
            "unit": "ns/iter",
            "extra": "iterations: 8571\ncpu: 79355.1141057052 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 57944.82153718524,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 90013.30121647741 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 29502.0361842105,
            "unit": "ns/iter",
            "extra": "iterations: 14288\ncpu: 46657.11128219456 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 33414998.523807883,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33402975.952380676 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 24243300.22916621,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 39046087.20833308 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12436042.840909196,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 20323353.11363639 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8509404310.999969,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8507589138 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4553969304.250004,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5298936487.500001 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2212330522.687502,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2833589240.7500014 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.612071219526328,
            "unit": "ns/iter",
            "extra": "iterations: 267282373\ncpu: 2.611904414661866 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.884017079897696,
            "unit": "ns/iter",
            "extra": "iterations: 101473441\ncpu: 6.883207153682686 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 109.9563754172785,
            "unit": "ns/iter",
            "extra": "iterations: 6406663\ncpu: 109.92767357983345 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2180.3320377863274,
            "unit": "ns/iter",
            "extra": "iterations: 320328\ncpu: 2180.148194975148 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 51684.99422745239,
            "unit": "ns/iter",
            "extra": "iterations: 13339\ncpu: 51684.493290351296 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 849041.7712082396,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 848983.5694087375 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.08896315068931,
            "unit": "ns/iter",
            "extra": "iterations: 31543060\ncpu: 23.087388160819106 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 25.503385496228944,
            "unit": "ns/iter",
            "extra": "iterations: 27143879\ncpu: 25.502089476599842 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 392.6204409974042,
            "unit": "ns/iter",
            "extra": "iterations: 1756881\ncpu: 392.59854936105546 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6532.598729920148,
            "unit": "ns/iter",
            "extra": "iterations: 108812\ncpu: 6532.288166746316 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 112970.05053497013,
            "unit": "ns/iter",
            "extra": "iterations: 6075\ncpu: 112964.14271604834 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1886249.023936037,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 1886130.9627660054 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 400.31411372475213,
            "unit": "ns/iter",
            "extra": "iterations: 1787983\ncpu: 400.2840821193488 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 484.56708172144863,
            "unit": "ns/iter",
            "extra": "iterations: 992640\ncpu: 964.2602806656971 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 227.3267928164264,
            "unit": "ns/iter",
            "extra": "iterations: 1479432\ncpu: 459.1870805822637 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6359.108164631845,
            "unit": "ns/iter",
            "extra": "iterations: 109019\ncpu: 6357.75872095711 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 6964.811913979986,
            "unit": "ns/iter",
            "extra": "iterations: 42874\ncpu: 13848.777534170058 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3549.6869576600525,
            "unit": "ns/iter",
            "extra": "iterations: 80208\ncpu: 7760.3481822261765 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 109202.19548150565,
            "unit": "ns/iter",
            "extra": "iterations: 6241\ncpu: 109190.11232174464 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 155484.50172414086,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 303061.6831417632 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 85886.83427762765,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 166512.83711048705 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1828612.5207758413,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 1828538.3573407757 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 735079486.5000125,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 913105370.0000108 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 531271994.7500071,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 627864075.0000008 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2bd11ab45fcc0fad438aa599c0ddb881b0042a0b",
          "message": "Added Operator<< for Graph and Partition\n\nSigned-off-by: GitHub <noreply@github.com>",
          "timestamp": "2021-09-23T12:51:11Z",
          "tree_id": "02367f47c2b2f853229d1b40567d140becd2eddb",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/2bd11ab45fcc0fad438aa599c0ddb881b0042a0b"
        },
        "date": 1632402051308,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.656952913521902,
            "unit": "ns/iter",
            "extra": "iterations: 37894553\ncpu: 18.655764668869427 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.009999987734773e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.201327045815564,
            "unit": "ns/iter",
            "extra": "iterations: 38763997\ncpu: 18.2004106284499 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 9.000000000813912e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.438894088460981,
            "unit": "ns/iter",
            "extra": "iterations: 158673306\ncpu: 4.438662638062133 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.670452810614215,
            "unit": "ns/iter",
            "extra": "iterations: 93504809\ncpu: 7.670076487723752 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 310.66743773638063,
            "unit": "ns/iter",
            "extra": "iterations: 2295080\ncpu: 310.6491494849853 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 85446.18750000565,
            "unit": "ns/iter",
            "extra": "iterations: 8160\ncpu: 85439.44767156868 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 25721857.04761816,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 25718966.047619015 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 12067599535,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12066674167.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.37831211777677,
            "unit": "ns/iter",
            "extra": "iterations: 30085547\ncpu: 23.37677470181942 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 25.37010708946362,
            "unit": "ns/iter",
            "extra": "iterations: 26893962\ncpu: 25.368594556651765 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 528.5701792088292,
            "unit": "ns/iter",
            "extra": "iterations: 1298262\ncpu: 528.5598792847676 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 87650.53734491428,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 87649.77096774222 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 31207300.86666678,
            "unit": "ns/iter",
            "extra": "iterations: 30\ncpu: 31206650.333333384 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13600446583.000008,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13599627051.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 536.4484179332205,
            "unit": "ns/iter",
            "extra": "iterations: 1328863\ncpu: 536.4124006763661 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 688.7557048748577,
            "unit": "ns/iter",
            "extra": "iterations: 569250\ncpu: 1373.4363056653542 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 370.4827522922619,
            "unit": "ns/iter",
            "extra": "iterations: 1189216\ncpu: 792.0444368390574 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 89268.4147838904,
            "unit": "ns/iter",
            "extra": "iterations: 8144\ncpu: 89262.62794695456 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 63548.99800417009,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 98140.26726831036 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 34420.00965877888,
            "unit": "ns/iter",
            "extra": "iterations: 14624\ncpu: 64933.74767505461 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 30546071.99999964,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 30539567.16000016 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 21700382.22500068,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 35971478.89999978 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10533412.131249875,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 19982036.874999993 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11490238066.000017,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11489244094 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5433468617.750009,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 6484285994.499999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2326372828.4999914,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3072714720 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.8063892700329385,
            "unit": "ns/iter",
            "extra": "iterations: 251914881\ncpu: 2.805766361217836 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.435463330205241,
            "unit": "ns/iter",
            "extra": "iterations: 109304292\ncpu: 6.435054764363655 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 93.45175336524986,
            "unit": "ns/iter",
            "extra": "iterations: 7227530\ncpu: 93.44798181398096 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2154.5206000212106,
            "unit": "ns/iter",
            "extra": "iterations: 330655\ncpu: 2154.447932134704 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 36897.80910025802,
            "unit": "ns/iter",
            "extra": "iterations: 19450\ncpu: 36895.46298200486 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 969405.5056021179,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 969351.5686274677 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.390432753279615,
            "unit": "ns/iter",
            "extra": "iterations: 29703530\ncpu: 23.388971209819477 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.900712804351762,
            "unit": "ns/iter",
            "extra": "iterations: 26293330\ncpu: 26.8985967924185 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 398.48526926151925,
            "unit": "ns/iter",
            "extra": "iterations: 1750659\ncpu: 398.46561094993416 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6236.395544644768,
            "unit": "ns/iter",
            "extra": "iterations: 109980\ncpu: 6236.311456628527 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 101572.88644530327,
            "unit": "ns/iter",
            "extra": "iterations: 6957\ncpu: 101570.96190886882 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1827934.0537635097,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 1827783.787634431 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 404.13419024755143,
            "unit": "ns/iter",
            "extra": "iterations: 1715691\ncpu: 404.03900002972307 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 591.7811121971682,
            "unit": "ns/iter",
            "extra": "iterations: 804138\ncpu: 1180.0395827581788 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 295.8402947813159,
            "unit": "ns/iter",
            "extra": "iterations: 1437608\ncpu: 599.3353800201428 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6598.315651099338,
            "unit": "ns/iter",
            "extra": "iterations: 101175\ncpu: 6597.40684951815 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9970.65915556023,
            "unit": "ns/iter",
            "extra": "iterations: 35858\ncpu: 19780.571643705684 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4402.547034593149,
            "unit": "ns/iter",
            "extra": "iterations: 74408\ncpu: 8902.40265831594 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 106131.64755837464,
            "unit": "ns/iter",
            "extra": "iterations: 6594\ncpu: 106129.08644222065 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 7811785.159090463,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 13658697.95454563 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 98170.87376021365,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 189367.6449824952 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1977551.9830507922,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 1977401.6892655306 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2713860759.7499914,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2918449461.499991 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1501875445.0625024,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1703271518.7500014 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "834f0f31db1eb5032391add1143d4cf1f4322e48",
          "message": "Update README.md for Hacktoberfest",
          "timestamp": "2021-09-30T08:50:27Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/62/commits/834f0f31db1eb5032391add1143d4cf1f4322e48"
        },
        "date": 1633071366082,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.39927481815326,
            "unit": "ns/iter",
            "extra": "iterations: 41760560\ncpu: 16.39885324813652 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000172533e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 17.295154011355237,
            "unit": "ns/iter",
            "extra": "iterations: 42640979\ncpu: 17.29320539286868 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.628558968653992,
            "unit": "ns/iter",
            "extra": "iterations: 189744436\ncpu: 3.628367115861041 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.166792872013992,
            "unit": "ns/iter",
            "extra": "iterations: 116587770\ncpu: 6.166596633592012 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 297.5469156386374,
            "unit": "ns/iter",
            "extra": "iterations: 2416497\ncpu: 297.2679647440076 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 81328.6592828118,
            "unit": "ns/iter",
            "extra": "iterations: 9119\ncpu: 81325.55685930468 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 30274824.23809553,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 30271453.71428572 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8824468675.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8823939054 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.368767417549073,
            "unit": "ns/iter",
            "extra": "iterations: 29309520\ncpu: 23.360746747131977 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 24.36292097975224,
            "unit": "ns/iter",
            "extra": "iterations: 27976969\ncpu: 24.361373635578687 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 514.7347340545484,
            "unit": "ns/iter",
            "extra": "iterations: 1373007\ncpu: 514.7194442562942 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 79997.63305601772,
            "unit": "ns/iter",
            "extra": "iterations: 9015\ncpu: 79976.74742096543 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 33733437.8260869,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 33731020.47826084 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9603359405.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9602772254.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 513.9163419999591,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 513.8509639999995 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 605.6494379877761,
            "unit": "ns/iter",
            "extra": "iterations: 618136\ncpu: 1199.5076908641472 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 320.8583811571367,
            "unit": "ns/iter",
            "extra": "iterations: 1161904\ncpu: 662.901420427161 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 80837.96267725162,
            "unit": "ns/iter",
            "extra": "iterations: 8815\ncpu: 80832.57379466822 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 68184.86793702509,
            "unit": "ns/iter",
            "extra": "iterations: 6796\ncpu: 107896.58034137652 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 30603.91287757182,
            "unit": "ns/iter",
            "extra": "iterations: 12448\ncpu: 45868.22959511549 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 34448731.24999788,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 34437722.05000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 26008180.80555535,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 42017526.94444441 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12656408.624999689,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 20295089.388888985 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8662416225.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8661780235.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4987708418.499991,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5628654317 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2543311682.1874967,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2990285305.0000014 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.6153423003210228,
            "unit": "ns/iter",
            "extra": "iterations: 252416021\ncpu: 2.614915722801905 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.805430490643334,
            "unit": "ns/iter",
            "extra": "iterations: 124161967\ncpu: 5.804821624644522 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 92.72609099531287,
            "unit": "ns/iter",
            "extra": "iterations: 7176062\ncpu: 92.7154361263886 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2062.842597655077,
            "unit": "ns/iter",
            "extra": "iterations: 345681\ncpu: 2062.524347592146 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 51379.06382255221,
            "unit": "ns/iter",
            "extra": "iterations: 11767\ncpu: 51377.56794425091 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 974787.2321187967,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 936861.4048583028 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 24.33643456717292,
            "unit": "ns/iter",
            "extra": "iterations: 26914449\ncpu: 24.333614520587048 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.294596660804366,
            "unit": "ns/iter",
            "extra": "iterations: 26253821\ncpu: 26.293785350330452 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 378.91828934482714,
            "unit": "ns/iter",
            "extra": "iterations: 1874884\ncpu: 378.9010610789769 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6188.444319635091,
            "unit": "ns/iter",
            "extra": "iterations: 115732\ncpu: 6188.320758303707 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 115965.21347635867,
            "unit": "ns/iter",
            "extra": "iterations: 6619\ncpu: 115953.55008309365 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1925867.4661017975,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 1925656.7175141217 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 405.6960965466777,
            "unit": "ns/iter",
            "extra": "iterations: 1787571\ncpu: 405.66722720384996 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 465.5046463073707,
            "unit": "ns/iter",
            "extra": "iterations: 774486\ncpu: 926.4629664061015 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 263.4945970840673,
            "unit": "ns/iter",
            "extra": "iterations: 1303324\ncpu: 543.2258870396001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6879.321374187253,
            "unit": "ns/iter",
            "extra": "iterations: 107700\ncpu: 6878.030733519019 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8109.165969959006,
            "unit": "ns/iter",
            "extra": "iterations: 42342\ncpu: 16112.278683104561 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4337.711265008393,
            "unit": "ns/iter",
            "extra": "iterations: 78624\ncpu: 8609.90822140818 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 115735.71079603813,
            "unit": "ns/iter",
            "extra": "iterations: 5854\ncpu: 115720.64297916 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 157316.22665484864,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 308721.2180851163 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 76996.79607908787,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 149826.2982573768 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1959453.0563001572,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 1959354.951742657 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1981836467.7500427,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2210242354.500002 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 292495386.937496,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 395207355.25000095 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19c6586eaf65b05edfcf4ac9c69839a94b00c95a",
          "message": "Update README.md for Hacktoberfest (#62)",
          "timestamp": "2021-10-01T09:00:57+02:00",
          "tree_id": "e351753b6753f9ab6755764e031a8c0ccac29862",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/19c6586eaf65b05edfcf4ac9c69839a94b00c95a"
        },
        "date": 1633072188467,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000033756e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.796858520646843,
            "unit": "ns/iter",
            "extra": "iterations: 44536788\ncpu: 16.79549782530343 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 4.999999987376214e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 4.999999987376214e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.507165024913053,
            "unit": "ns/iter",
            "extra": "iterations: 44410034\ncpu: 16.50581370867674 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.010000106471125e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 4.999999998478444e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 0.000007199999970453064,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.470059276577169,
            "unit": "ns/iter",
            "extra": "iterations: 201326064\ncpu: 3.4698581898466956 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.829657021041061,
            "unit": "ns/iter",
            "extra": "iterations: 113447834\ncpu: 5.829049058794725 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 300.779225005745,
            "unit": "ns/iter",
            "extra": "iterations: 2322985\ncpu: 300.7406220875297 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 77201.10276637398,
            "unit": "ns/iter",
            "extra": "iterations: 9254\ncpu: 77196.0034579641 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 32237595.105264544,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 32234352.736842137 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 9355991339.000013,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9351876105 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 24.18949559854901,
            "unit": "ns/iter",
            "extra": "iterations: 27994170\ncpu: 24.187877047256617 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 23.757339331567703,
            "unit": "ns/iter",
            "extra": "iterations: 28233191\ncpu: 23.756280648545957 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 488.49928262269873,
            "unit": "ns/iter",
            "extra": "iterations: 1502696\ncpu: 488.4363397520188 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 80774.17087887056,
            "unit": "ns/iter",
            "extra": "iterations: 8784\ncpu: 80775.00432604745 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 35745072.208333306,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 35669285.95833326 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10100777729.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10099862925 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 504.3834919920491,
            "unit": "ns/iter",
            "extra": "iterations: 1271492\ncpu: 504.3666771006038 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 615.6151190877733,
            "unit": "ns/iter",
            "extra": "iterations: 563030\ncpu: 1221.5857378825358 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 323.97657105448616,
            "unit": "ns/iter",
            "extra": "iterations: 1077652\ncpu: 647.6357748141331 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 74478.1153428785,
            "unit": "ns/iter",
            "extra": "iterations: 9216\ncpu: 74472.99511718754 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58045.86762945247,
            "unit": "ns/iter",
            "extra": "iterations: 6682\ncpu: 91240.87398982355 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 30045.47823215188,
            "unit": "ns/iter",
            "extra": "iterations: 17032\ncpu: 52292.53640206671 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 33997353.15789605,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 33992028.57894735 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 25040886.424999088,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 40376318.350000314 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 14308156.548610875,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 21155366.13888882 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8933858413.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8933095276.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4519034302.500003,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5492273405.999999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2522812090.0625014,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2913993329.250001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.4660038913418916,
            "unit": "ns/iter",
            "extra": "iterations: 291506628\ncpu: 2.4657747679068245 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.140321844983914,
            "unit": "ns/iter",
            "extra": "iterations: 112974947\ncpu: 6.139812121354621 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 92.58447416225712,
            "unit": "ns/iter",
            "extra": "iterations: 7339108\ncpu: 92.58142283776202 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1876.3215922324478,
            "unit": "ns/iter",
            "extra": "iterations: 345226\ncpu: 1876.1495455151191 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 55919.12189616514,
            "unit": "ns/iter",
            "extra": "iterations: 12404\ncpu: 55917.53329571141 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 853280.2326477742,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 853217.2570694044 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 21.677411699722654,
            "unit": "ns/iter",
            "extra": "iterations: 32181722\ncpu: 21.67491323180289 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 24.44553375490662,
            "unit": "ns/iter",
            "extra": "iterations: 25858254\ncpu: 24.442281601843675 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 357.7752021526856,
            "unit": "ns/iter",
            "extra": "iterations: 1910561\ncpu: 357.7681351184324 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5893.024151110795,
            "unit": "ns/iter",
            "extra": "iterations: 112500\ncpu: 5892.9477599999955 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 110542.14475451875,
            "unit": "ns/iter",
            "extra": "iterations: 6701\ncpu: 110531.92269810435 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1905369.2882205113,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 1905258.7844611679 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 410.8521942680292,
            "unit": "ns/iter",
            "extra": "iterations: 1761772\ncpu: 410.83033672916474 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 427.7038651150749,
            "unit": "ns/iter",
            "extra": "iterations: 619076\ncpu: 842.8471302392611 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 245.0874449152482,
            "unit": "ns/iter",
            "extra": "iterations: 1403292\ncpu: 507.93324126411517 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6088.558495086054,
            "unit": "ns/iter",
            "extra": "iterations: 106026\ncpu: 6087.231386640921 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9127.383016840024,
            "unit": "ns/iter",
            "extra": "iterations: 39074\ncpu: 17946.756334135323 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4294.286467560536,
            "unit": "ns/iter",
            "extra": "iterations: 83540\ncpu: 8680.438771845704 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 114165.89663379855,
            "unit": "ns/iter",
            "extra": "iterations: 5882\ncpu: 114141.53485209089 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 170679.38347205558,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 333775.44887039205 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 79322.88899707976,
            "unit": "ns/iter",
            "extra": "iterations: 4108\ncpu: 154504.71518987446 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1732742.3385828426,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 1732562.54330709 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 666150838.2500187,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 832312800.0000098 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 463227380.6874991,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 576081861.4999979 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "saloni662001@gmail.com",
            "name": "Saloni Thete",
            "username": "SaloniThete"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b081e1f1d18ac6cf7a117633d2ccc935b933bd0",
          "message": "Fixed typos (#63)",
          "timestamp": "2021-10-01T16:41:51+02:00",
          "tree_id": "ecaf9dfcd52115e07632dff62a5f09aa5c64af05",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/8b081e1f1d18ac6cf7a117633d2ccc935b933bd0"
        },
        "date": 1633099869366,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.658008160066615,
            "unit": "ns/iter",
            "extra": "iterations: 42051863\ncpu: 16.655151615993805 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.385286359131083,
            "unit": "ns/iter",
            "extra": "iterations: 42858787\ncpu: 16.38368386394137 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.999999749903509e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.8758200071676367,
            "unit": "ns/iter",
            "extra": "iterations: 181979202\ncpu: 3.8756508065135935 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.713828632880737,
            "unit": "ns/iter",
            "extra": "iterations: 107437880\ncpu: 6.712631513205582 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 322.2210053351731,
            "unit": "ns/iter",
            "extra": "iterations: 2162622\ncpu: 322.2091632287105 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 83316.85610010492,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 83309.90557293476 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 32129520.50000063,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 32129015.999999993 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 9251113737.000025,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9245577321.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000004670937e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.561056493181,
            "unit": "ns/iter",
            "extra": "iterations: 27964667\ncpu: 23.560173700620204 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 31.450970338920172,
            "unit": "ns/iter",
            "extra": "iterations: 22671460\ncpu: 31.448367418772307 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 541.6834877136166,
            "unit": "ns/iter",
            "extra": "iterations: 1306082\ncpu: 541.6719302463388 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 83644.35611731272,
            "unit": "ns/iter",
            "extra": "iterations: 8149\ncpu: 83634.80451589153 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 35521669.521739095,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 35518503.08695662 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10287900103.99996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10286986688.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 545.950127448125,
            "unit": "ns/iter",
            "extra": "iterations: 1209904\ncpu: 545.9516928615826 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 589.5522786558972,
            "unit": "ns/iter",
            "extra": "iterations: 594956\ncpu: 1170.3716510128497 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 298.09845408839914,
            "unit": "ns/iter",
            "extra": "iterations: 1232412\ncpu: 612.1630948092068 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 84930.66346992238,
            "unit": "ns/iter",
            "extra": "iterations: 8029\ncpu: 84916.63681653963 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 64154.75694815966,
            "unit": "ns/iter",
            "extra": "iterations: 7484\ncpu: 100447.4305184391 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 35310.80568801164,
            "unit": "ns/iter",
            "extra": "iterations: 13212\ncpu: 58610.08810172548 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 35744082.368422054,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 35738102.21052635 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 24621122.349999778,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 39616794.40000014 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 13418332.958333204,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 19636012.361111093 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9066231998.999968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9065496291.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4942601275.750008,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5650967369 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2589668548.4374976,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3041454715.9999995 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.700289949573547,
            "unit": "ns/iter",
            "extra": "iterations: 260670154\ncpu: 2.698928290041193 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 7.09506351850265,
            "unit": "ns/iter",
            "extra": "iterations: 100853999\ncpu: 7.094579690389808 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 113.02653237932297,
            "unit": "ns/iter",
            "extra": "iterations: 6316207\ncpu: 113.013569377951 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2271.1903717237474,
            "unit": "ns/iter",
            "extra": "iterations: 319081\ncpu: 2270.9977466536634 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 54579.81633935668,
            "unit": "ns/iter",
            "extra": "iterations: 12730\ncpu: 54574.090730557866 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 898077.0899743536,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 898056.9280205744 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 24.717561595825877,
            "unit": "ns/iter",
            "extra": "iterations: 29766993\ncpu: 24.717642322823803 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 28.583113821111073,
            "unit": "ns/iter",
            "extra": "iterations: 25252960\ncpu: 28.58210102894904 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 436.681840195441,
            "unit": "ns/iter",
            "extra": "iterations: 1622958\ncpu: 436.652964525268 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6929.162684722239,
            "unit": "ns/iter",
            "extra": "iterations: 101165\ncpu: 6929.185301240557 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 117568.61170568036,
            "unit": "ns/iter",
            "extra": "iterations: 5980\ncpu: 117568.68043478244 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1978202.2647061737,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 1977954.6503268261 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 410.29862874766127,
            "unit": "ns/iter",
            "extra": "iterations: 1688019\ncpu: 410.2988497167416 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 479.408878107971,
            "unit": "ns/iter",
            "extra": "iterations: 812752\ncpu: 940.6538599720216 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 227.08160709448353,
            "unit": "ns/iter",
            "extra": "iterations: 1506744\ncpu: 457.3486989163526 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6826.119908269587,
            "unit": "ns/iter",
            "extra": "iterations: 106398\ncpu: 6825.203697437844 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7853.545517591621,
            "unit": "ns/iter",
            "extra": "iterations: 43258\ncpu: 15602.225854177135 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3899.7213050685423,
            "unit": "ns/iter",
            "extra": "iterations: 84440\ncpu: 7774.3430364755095 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 119320.48962375219,
            "unit": "ns/iter",
            "extra": "iterations: 5927\ncpu: 119296.13092626589 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 162956.32732243565,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 313337.65683061274 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 82207.07383443938,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 155518.69915565607 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1955003.7468750502,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 1954806.312499979 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1149140397.0000248,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1321743393.0000033 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 377776988.56250197,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 472528098.75000566 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gmier94@gmail.com",
            "name": "Gonzalo Mier",
            "username": "sanson-robotics"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d160c5c01338a0f87eadeaebae6088831e3ef8f1",
          "message": "Update README.md (#67)\n\nParent option is applied to the command \"mkdir build\" to prevent errors if the folder is already made. Other explanations are converted into \"easier to execute\" code.",
          "timestamp": "2021-10-05T10:00:15+02:00",
          "tree_id": "c79906397541a096910f8b0a619b05b0d7966650",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/d160c5c01338a0f87eadeaebae6088831e3ef8f1"
        },
        "date": 1633421286928,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999894978e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 13.824254294629307,
            "unit": "ns/iter",
            "extra": "iterations: 52175164\ncpu: 13.776466922078098 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 13.60794001410755,
            "unit": "ns/iter",
            "extra": "iterations: 50208072\ncpu: 13.605737320485042 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000001282757e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 2.9603542888083423,
            "unit": "ns/iter",
            "extra": "iterations: 237522716\ncpu: 2.9600663416125643 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.422503626112272,
            "unit": "ns/iter",
            "extra": "iterations: 136448481\ncpu: 5.422130598874163 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 242.56607105758624,
            "unit": "ns/iter",
            "extra": "iterations: 2931397\ncpu: 242.55290600351995 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 60037.91608864612,
            "unit": "ns/iter",
            "extra": "iterations: 11822\ncpu: 60037.45804432412 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 26740526.954545822,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 26739681.545454524 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 7720402431.999986,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7719898229 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 5.999999928008037e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 19.416634373030295,
            "unit": "ns/iter",
            "extra": "iterations: 34717882\ncpu: 19.415242871094513 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 20.752456972473997,
            "unit": "ns/iter",
            "extra": "iterations: 36015666\ncpu: 20.750749826478295 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 435.44566122464767,
            "unit": "ns/iter",
            "extra": "iterations: 1677743\ncpu: 435.41318604816087 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 64064.43163466911,
            "unit": "ns/iter",
            "extra": "iterations: 11146\ncpu: 64059.594652790096 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 29119944.62962963,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 29118488.59259265 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 8456475406.999999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8452828890.999999 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 417.7402292891383,
            "unit": "ns/iter",
            "extra": "iterations: 1712772\ncpu: 417.7322323111297 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 559.1738795177725,
            "unit": "ns/iter",
            "extra": "iterations: 625088\ncpu: 1112.7662569110255 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 259.86977744985893,
            "unit": "ns/iter",
            "extra": "iterations: 1191372\ncpu: 527.0083710209749 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 63595.74660344671,
            "unit": "ns/iter",
            "extra": "iterations: 10967\ncpu: 63590.90763198656 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 44210.559992879396,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 68508.6633040588 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 29746.029397537724,
            "unit": "ns/iter",
            "extra": "iterations: 22740\ncpu: 59087.8740545296 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 29045131.559998937,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 29043740.520000085 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 21034658.000000186,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 33858965.08333322 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10065285.995192306,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 18180999.51923078 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 7575253640.999961,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 7574523053 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4182969886.9999986,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4570804552.999998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1887502151.7499952,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2391404042.5 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.053635815534758,
            "unit": "ns/iter",
            "extra": "iterations: 348188553\ncpu: 2.0535488712634407 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 4.58997129400943,
            "unit": "ns/iter",
            "extra": "iterations: 151755431\ncpu: 4.5899422802205665 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 75.61727186203096,
            "unit": "ns/iter",
            "extra": "iterations: 9339491\ncpu: 75.6136538918451 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1603.5890372007907,
            "unit": "ns/iter",
            "extra": "iterations: 446656\ncpu: 1603.5416248746199 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 49192.04357298672,
            "unit": "ns/iter",
            "extra": "iterations: 14229\ncpu: 49191.31260102624 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 797474.4584415718,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 797417.4740259694 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.89056852930272,
            "unit": "ns/iter",
            "extra": "iterations: 35968876\ncpu: 19.887999836303013 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 22.148001977783565,
            "unit": "ns/iter",
            "extra": "iterations: 31338115\ncpu: 22.146356186388513 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 326.41252828346387,
            "unit": "ns/iter",
            "extra": "iterations: 2147014\ncpu: 326.4003336727165 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5285.917108131267,
            "unit": "ns/iter",
            "extra": "iterations: 128927\ncpu: 5285.352354433114 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 102821.08128078839,
            "unit": "ns/iter",
            "extra": "iterations: 6496\ncpu: 102809.75123152617 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1518372.4439560256,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 1518305.8637362493 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 314.4234091422869,
            "unit": "ns/iter",
            "extra": "iterations: 2199081\ncpu: 314.40426705519405 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 464.91321551668085,
            "unit": "ns/iter",
            "extra": "iterations: 846626\ncpu: 927.3603480167055 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 211.98151927707215,
            "unit": "ns/iter",
            "extra": "iterations: 1809196\ncpu: 440.3295579915166 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5087.540780472497,
            "unit": "ns/iter",
            "extra": "iterations: 134047\ncpu: 5087.082068229855 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 6595.557779153478,
            "unit": "ns/iter",
            "extra": "iterations: 54916\ncpu: 13154.624353558065 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3635.712257018233,
            "unit": "ns/iter",
            "extra": "iterations: 105152\ncpu: 7276.044487979331 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 95922.94619640309,
            "unit": "ns/iter",
            "extra": "iterations: 7230\ncpu: 95896.84674965261 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 127101.90295138881,
            "unit": "ns/iter",
            "extra": "iterations: 2880\ncpu: 250802.85000000207 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 64682.41897288139,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 130576.55999257158 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1527700.8541176976,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 1527615.8964706396 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1814209084.2499955,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1975516421.4999979 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 437910324.0000042,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 523652826.2500008 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "86324825+codesee-architecture-diagrams[bot]@users.noreply.github.com",
            "name": "codesee-architecture-diagrams[bot]",
            "username": "codesee-architecture-diagrams[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28212ec734f1ec915d8412027481c408ad43ffde",
          "message": "Add CodeSee architecture diagram workflow to repository (#68)\n\nCo-authored-by: codesee-architecture-diagrams[bot] <86324825+codesee-architecture-diagrams[bot]@users.noreply.github.com>",
          "timestamp": "2021-10-05T18:02:06+02:00",
          "tree_id": "2bdc7e318022e3b35ec13881977bd29a1548af78",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/28212ec734f1ec915d8412027481c408ad43ffde"
        },
        "date": 1633450394967,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.705895261699865,
            "unit": "ns/iter",
            "extra": "iterations: 37366331\ncpu: 18.704862888465016 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.009999987734773e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.608400854601303,
            "unit": "ns/iter",
            "extra": "iterations: 37636290\ncpu: 18.607349502302167 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 9.999999974752427e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.999999749903509e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.520853278906151,
            "unit": "ns/iter",
            "extra": "iterations: 155020825\ncpu: 4.5206570472064005 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.821778391566244,
            "unit": "ns/iter",
            "extra": "iterations: 90863735\ncpu: 7.821441095284057 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 313.0563083211864,
            "unit": "ns/iter",
            "extra": "iterations: 2234501\ncpu: 313.0379149528241 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 86108.76746470318,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 86104.74953959492 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 25910154.999997932,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 25908562.90476188 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11859899272.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11859027315 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 24.10360090014678,
            "unit": "ns/iter",
            "extra": "iterations: 29035240\ncpu: 24.102521591004578 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 26.516553963641158,
            "unit": "ns/iter",
            "extra": "iterations: 26387638\ncpu: 26.515670027002752 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 547.7769743729116,
            "unit": "ns/iter",
            "extra": "iterations: 1277203\ncpu: 547.7580470763083 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 89939.24183594188,
            "unit": "ns/iter",
            "extra": "iterations: 7778\ncpu: 89934.5735407564 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 32314880.928573024,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 32312731.178571396 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13367622094.000011,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13363876105 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 567.3194520984019,
            "unit": "ns/iter",
            "extra": "iterations: 1270228\ncpu: 567.2794262132514 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 616.8393505349792,
            "unit": "ns/iter",
            "extra": "iterations: 570254\ncpu: 1209.7646189242023 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 347.6331341943832,
            "unit": "ns/iter",
            "extra": "iterations: 920128\ncpu: 756.4760924566982 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 90054.41272703555,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 90044.7726394438 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 72193.68963276088,
            "unit": "ns/iter",
            "extra": "iterations: 6154\ncpu: 114398.40640234 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 34475.971743522445,
            "unit": "ns/iter",
            "extra": "iterations: 16828\ncpu: 63653.085928214736 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 29153809.217392713,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 29152636.739130445 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 20785199.153845742,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 34487985.230769336 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10095084.086538775,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 17244075.038461544 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11908513306.999964,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11907824312.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4877474959.750003,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 6157310325.499997 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1895907588.500002,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3001432012.25 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.8623883236282928,
            "unit": "ns/iter",
            "extra": "iterations: 246180992\ncpu: 2.8620102562589382 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.6869255209126965,
            "unit": "ns/iter",
            "extra": "iterations: 108422354\ncpu: 6.6866859946612065 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 97.42480694253636,
            "unit": "ns/iter",
            "extra": "iterations: 7176620\ncpu: 97.4235467392728 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2157.780704071018,
            "unit": "ns/iter",
            "extra": "iterations: 329427\ncpu: 2157.7521120005617 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 37633.867524719266,
            "unit": "ns/iter",
            "extra": "iterations: 19113\ncpu: 37630.72102757229 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 1000236.543509277,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1000182.6319543548 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.788834171190132,
            "unit": "ns/iter",
            "extra": "iterations: 29529953\ncpu: 23.787871284454642 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.331779873247587,
            "unit": "ns/iter",
            "extra": "iterations: 26484105\ncpu: 26.33081265158865 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 402.3883054482534,
            "unit": "ns/iter",
            "extra": "iterations: 1740537\ncpu: 402.36982609390736 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6575.663724269703,
            "unit": "ns/iter",
            "extra": "iterations: 106829\ncpu: 6575.444757509714 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 106803.51469037282,
            "unit": "ns/iter",
            "extra": "iterations: 6637\ncpu: 106802.55657676776 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1931632.338842979,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 1931521.9834710392 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 416.3194514946096,
            "unit": "ns/iter",
            "extra": "iterations: 1680421\ncpu: 416.3055014189782 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 538.6915741913864,
            "unit": "ns/iter",
            "extra": "iterations: 627916\ncpu: 1068.0934965823503 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 260.82784025740165,
            "unit": "ns/iter",
            "extra": "iterations: 1398412\ncpu: 520.2694205999206 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6766.947382711766,
            "unit": "ns/iter",
            "extra": "iterations: 103122\ncpu: 6766.604701227664 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8599.459269597492,
            "unit": "ns/iter",
            "extra": "iterations: 42634\ncpu: 17093.498100107903 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4266.2554127201065,
            "unit": "ns/iter",
            "extra": "iterations: 79812\ncpu: 8577.653134867014 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 109523.44297739654,
            "unit": "ns/iter",
            "extra": "iterations: 6059\ncpu: 109517.76464763314 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 132485.60147298742,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 261074.23567922015 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 73967.614430602,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 147577.03299120485 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2025127.7707736406,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2025023.4641833948 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1048439374.2499946,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1248395025.0000029 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1724832131.6874921,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2009446943.7499979 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "50b95bc9ce25a7cd29a5a5fc718ac7dfa64b3722",
          "message": "Add CodeSee architecture diagram workflow to repository",
          "timestamp": "2021-10-05T08:00:19Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/68/commits/50b95bc9ce25a7cd29a5a5fc718ac7dfa64b3722"
        },
        "date": 1633450410798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.83581813570308,
            "unit": "ns/iter",
            "extra": "iterations: 37364541\ncpu: 18.828281257355737 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.999999749903509e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.567935216090103,
            "unit": "ns/iter",
            "extra": "iterations: 37668983\ncpu: 18.52650096765289 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.5314572699988735,
            "unit": "ns/iter",
            "extra": "iterations: 156453389\ncpu: 4.515284932562247 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.784400582194236,
            "unit": "ns/iter",
            "extra": "iterations: 88573203\ncpu: 7.78419949428723 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 312.6320493026294,
            "unit": "ns/iter",
            "extra": "iterations: 2239069\ncpu: 312.61724493528334 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 85989.83023027838,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 85986.50000000001 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 25894052.5714295,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 25893196.000000007 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 12015161863.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12014439977.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.883982047199712,
            "unit": "ns/iter",
            "extra": "iterations: 29017647\ncpu: 23.882774471686126 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 26.387110788644346,
            "unit": "ns/iter",
            "extra": "iterations: 26488789\ncpu: 26.38623604121729 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 540.877124046849,
            "unit": "ns/iter",
            "extra": "iterations: 1286224\ncpu: 540.8456590764908 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 88741.07657084535,
            "unit": "ns/iter",
            "extra": "iterations: 7862\ncpu: 88738.0660137369 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 32063499.85714293,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 32061258.678571314 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13682277020.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13681220934.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 555.7096572590002,
            "unit": "ns/iter",
            "extra": "iterations: 1289662\ncpu: 555.6834217027375 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 675.5099298736426,
            "unit": "ns/iter",
            "extra": "iterations: 532182\ncpu: 1343.6466471996482 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 338.6968534982382,
            "unit": "ns/iter",
            "extra": "iterations: 1083632\ncpu: 739.8056794188435 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 90308.89304537635,
            "unit": "ns/iter",
            "extra": "iterations: 7779\ncpu: 90301.19012726597 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 71731.3017817424,
            "unit": "ns/iter",
            "extra": "iterations: 5388\ncpu: 114685.02004454356 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 30730.167913550245,
            "unit": "ns/iter",
            "extra": "iterations: 14436\ncpu: 56319.733998337484 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 29033930.130434208,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 29033652.56521764 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 21040645.725000218,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 35664315.15000006 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10907049.142045625,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 17445380.81818187 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11882918431.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11879521376 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5358429744.249989,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 6229842935.999999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2936997747.875001,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3440525318.2499995 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.8716068631534344,
            "unit": "ns/iter",
            "extra": "iterations: 245031563\ncpu: 2.871407782678223 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.5858873960902145,
            "unit": "ns/iter",
            "extra": "iterations: 109007991\ncpu: 6.584774587763881 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 96.62990846480506,
            "unit": "ns/iter",
            "extra": "iterations: 7204442\ncpu: 96.62559029554298 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2125.8283932378267,
            "unit": "ns/iter",
            "extra": "iterations: 336397\ncpu: 2125.691492492518 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 36868.65987929654,
            "unit": "ns/iter",
            "extra": "iterations: 19055\ncpu: 36866.32784046235 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 1008667.2150997242,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1008594.5584045631 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.577699289610944,
            "unit": "ns/iter",
            "extra": "iterations: 29532548\ncpu: 23.57675741354934 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 25.74070361150742,
            "unit": "ns/iter",
            "extra": "iterations: 26987819\ncpu: 25.739587181906387 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 405.1341234147914,
            "unit": "ns/iter",
            "extra": "iterations: 1794161\ncpu: 405.1239565457053 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6257.273653362019,
            "unit": "ns/iter",
            "extra": "iterations: 113969\ncpu: 6257.081065903895 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 102803.21990207351,
            "unit": "ns/iter",
            "extra": "iterations: 6944\ncpu: 102797.31581221135 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1939368.8106668682,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 1939276.3786666666 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 416.2399256822171,
            "unit": "ns/iter",
            "extra": "iterations: 1683042\ncpu: 416.13079352743097 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 588.3207939498457,
            "unit": "ns/iter",
            "extra": "iterations: 586964\ncpu: 1173.567176181148 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 278.10383828646957,
            "unit": "ns/iter",
            "extra": "iterations: 1142984\ncpu: 561.2751289606805 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6768.980088473002,
            "unit": "ns/iter",
            "extra": "iterations: 98787\ncpu: 6767.24285584158 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9885.28597684915,
            "unit": "ns/iter",
            "extra": "iterations: 38358\ncpu: 19733.55362636192 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4821.365976536032,
            "unit": "ns/iter",
            "extra": "iterations: 77908\ncpu: 9603.522423884362 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 106770.83873957256,
            "unit": "ns/iter",
            "extra": "iterations: 6474\ncpu: 106752.61816496468 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 397410.6412791111,
            "unit": "ns/iter",
            "extra": "iterations: 860\ncpu: 724836.7255813937 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 86270.86950549814,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 168660.66552197648 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2015827.3826816778,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2015709.57262575 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3272228312.00001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3481872821.499993 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 602234061.124996,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 739696198.7499956 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51043033+sidml@users.noreply.github.com",
            "name": "Siddhartha",
            "username": "sidml"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b778cdde434be70eb8ebf1f8f17643f3cdfafd2",
          "message": "Bellman-Ford algorithm (#69)\n\n* BellmanFordResult_struct\r\n\r\n* bellman-ford algorithm\r\n\r\n* bellman ford test cases\r\n\r\n* update cmakelist\r\n\r\n* update no weighted edge condition and add test\r\n\r\n* update docs",
          "timestamp": "2021-10-11T09:57:50+02:00",
          "tree_id": "4809d33304f3fd938a8ff3d62e2e62d0670b11c4",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/0b778cdde434be70eb8ebf1f8f17643f3cdfafd2"
        },
        "date": 1633939585216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.000000000033756e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.40324275061995,
            "unit": "ns/iter",
            "extra": "iterations: 45536650\ncpu: 15.369178672563748 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.68218774707077,
            "unit": "ns/iter",
            "extra": "iterations: 44613969\ncpu: 15.680419421997627 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.697963956065028,
            "unit": "ns/iter",
            "extra": "iterations: 189492129\ncpu: 3.697619699021904 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.6486593768893645,
            "unit": "ns/iter",
            "extra": "iterations: 104064818\ncpu: 6.648295200016587 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 264.81414511603583,
            "unit": "ns/iter",
            "extra": "iterations: 2680586\ncpu: 264.7997695280062 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71835.77654435117,
            "unit": "ns/iter",
            "extra": "iterations: 9729\ncpu: 71828.11111111114 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21618263.200000457,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21617446.079999994 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10372120706.000032,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10371191208 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999975221272e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.08182398704007,
            "unit": "ns/iter",
            "extra": "iterations: 34868296\ncpu: 20.079985497427213 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.08906900809764,
            "unit": "ns/iter",
            "extra": "iterations: 31688890\ncpu: 22.088321111910233 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 456.10118215967714,
            "unit": "ns/iter",
            "extra": "iterations: 1535241\ncpu: 456.0712819681086 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75315.68156364629,
            "unit": "ns/iter",
            "extra": "iterations: 9286\ncpu: 75314.00290760263 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26938750.454545163,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26936819.575757608 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11592639895.000048,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11592019782.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 465.0455038279762,
            "unit": "ns/iter",
            "extra": "iterations: 1505236\ncpu: 465.02550629934467 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 589.8823796578414,
            "unit": "ns/iter",
            "extra": "iterations: 607684\ncpu: 1178.3893750699438 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 318.87032493030193,
            "unit": "ns/iter",
            "extra": "iterations: 1052872\ncpu: 715.1285084986625 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75177.44245222113,
            "unit": "ns/iter",
            "extra": "iterations: 9314\ncpu: 75175.19808889832 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 59356.46826670426,
            "unit": "ns/iter",
            "extra": "iterations: 6854\ncpu: 94928.44193171887 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 23277.67687150376,
            "unit": "ns/iter",
            "extra": "iterations: 15736\ncpu: 33847.72515251632 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 24236106.77777788,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 24214199.518518414 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 15491465.480769543,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 25889109.73076918 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9085116.745192105,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 16600379.519230817 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10117131673.000017,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10115986219.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4161948786.7499886,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4873668214.999999 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1678503728.062502,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2396644393.0000014 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.392413416119844,
            "unit": "ns/iter",
            "extra": "iterations: 292580328\ncpu: 2.3922808610700352 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.0185804592335925,
            "unit": "ns/iter",
            "extra": "iterations: 139378794\ncpu: 5.018466596862615 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 86.4995127912826,
            "unit": "ns/iter",
            "extra": "iterations: 8017098\ncpu: 86.49790011298369 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1853.3750686910678,
            "unit": "ns/iter",
            "extra": "iterations: 382146\ncpu: 1853.279073966498 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30877.219557354158,
            "unit": "ns/iter",
            "extra": "iterations: 23224\ncpu: 30876.37896141943 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 846267.7941176534,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 846217.135294112 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.74488171382331,
            "unit": "ns/iter",
            "extra": "iterations: 35453762\ncpu: 19.74401655880703 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.75634385274414,
            "unit": "ns/iter",
            "extra": "iterations: 32182730\ncpu: 21.755943855602286 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.7861996519257,
            "unit": "ns/iter",
            "extra": "iterations: 2031456\ncpu: 334.7766163776119 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5456.400090440588,
            "unit": "ns/iter",
            "extra": "iterations: 128261\ncpu: 5455.991860347279 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88243.23265512087,
            "unit": "ns/iter",
            "extra": "iterations: 7913\ncpu: 88238.41463414591 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1585635.0183908923,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 1585568.4528735988 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.6979528834562,
            "unit": "ns/iter",
            "extra": "iterations: 2024555\ncpu: 345.66202251853787 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 433.39857276235625,
            "unit": "ns/iter",
            "extra": "iterations: 724056\ncpu: 848.5410437866624 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 240.0650545909848,
            "unit": "ns/iter",
            "extra": "iterations: 1411772\ncpu: 484.2182009559742 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5648.364862344398,
            "unit": "ns/iter",
            "extra": "iterations: 123315\ncpu: 5647.087191339208 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7943.4591573138605,
            "unit": "ns/iter",
            "extra": "iterations: 44904\ncpu: 15857.642080883397 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3955.0072356947517,
            "unit": "ns/iter",
            "extra": "iterations: 87172\ncpu: 7944.3208713806025 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91927.21149547055,
            "unit": "ns/iter",
            "extra": "iterations: 7603\ncpu: 91921.51926871145 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 249513.63861388736,
            "unit": "ns/iter",
            "extra": "iterations: 1212\ncpu: 466964.02145213675 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 169448.1709183704,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 308255.6162131537 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1747817.3734939832,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 1742102.609638556 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2964875169.250007,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3133569407.5000057 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 852276361.7499933,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1051411339.2499975 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51043033+sidml@users.noreply.github.com",
            "name": "Siddhartha",
            "username": "sidml"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd901555ce886de882dc283b41a55cad20fa372e",
          "message": "Floyd Warshall Algorithm (#72)\n\n* result struct for floyd-warshall\r\n\r\n* floyd warshall implementation\r\n\r\n* floyd-warshall test cases",
          "timestamp": "2021-10-12T10:08:41+02:00",
          "tree_id": "df79a8b63eeb74c85644669bb4543611c1f3a248",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/fd901555ce886de882dc283b41a55cad20fa372e"
        },
        "date": 1634026691813,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 17.821216597672343,
            "unit": "ns/iter",
            "extra": "iterations: 38573508\ncpu: 17.821017549142795 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.009999987734773e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 17.81040714857482,
            "unit": "ns/iter",
            "extra": "iterations: 40470951\ncpu: 17.80917666105746 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.7346949346621368,
            "unit": "ns/iter",
            "extra": "iterations: 188596418\ncpu: 3.7345867141548785 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.6671039065003095,
            "unit": "ns/iter",
            "extra": "iterations: 106452637\ncpu: 6.666229574002941 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 328.19322882524887,
            "unit": "ns/iter",
            "extra": "iterations: 2160216\ncpu: 328.1770281305202 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 81736.8225098246,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 81730.13981973648 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 30026263.15000043,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 30024844.449999977 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 9177225680.99998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9176514657.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 24.53688841548415,
            "unit": "ns/iter",
            "extra": "iterations: 27774248\ncpu: 24.53552304998504 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 33.36532354433088,
            "unit": "ns/iter",
            "extra": "iterations: 21719342\ncpu: 33.35865474193456 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 559.7209182677096,
            "unit": "ns/iter",
            "extra": "iterations: 1218686\ncpu: 559.6826040505925 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 90343.12970936277,
            "unit": "ns/iter",
            "extra": "iterations: 7432\ncpu: 90339.20209903107 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 35464015.08695542,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 35458850.260869615 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10319304819.000025,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10318403826 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 561.0745628750794,
            "unit": "ns/iter",
            "extra": "iterations: 1290535\ncpu: 561.0347305574796 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 545.934701214467,
            "unit": "ns/iter",
            "extra": "iterations: 657562\ncpu: 1068.1565282057063 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 310.472310167725,
            "unit": "ns/iter",
            "extra": "iterations: 1231192\ncpu: 668.6159640413512 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 86418.41524513948,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 86413.39162591018 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 67117.3129272451,
            "unit": "ns/iter",
            "extra": "iterations: 8192\ncpu: 104156.35095214836 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 34708.707688050155,
            "unit": "ns/iter",
            "extra": "iterations: 9040\ncpu: 62467.24646017712 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 34186480.2105258,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 34182503.368420966 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 23608891.125000753,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 37716602.05000023 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 11994359.037500147,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 21028550.625000037 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9860668844.999964,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9858451852.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4970563591.5000105,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5878309998.500001 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2470860767.9374948,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3157965329.2500005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.7917378733554603,
            "unit": "ns/iter",
            "extra": "iterations: 271719558\ncpu: 2.7914291027957665 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.815428015815476,
            "unit": "ns/iter",
            "extra": "iterations: 100643454\ncpu: 6.81477051652063 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 111.59011002208817,
            "unit": "ns/iter",
            "extra": "iterations: 6202845\ncpu: 111.58056488595193 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2333.7690581081847,
            "unit": "ns/iter",
            "extra": "iterations: 310524\ncpu: 2333.3712563280155 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 55800.04272978724,
            "unit": "ns/iter",
            "extra": "iterations: 13012\ncpu: 55795.7601444817 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 884528.4118404629,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 884486.104247107 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 24.03723288389618,
            "unit": "ns/iter",
            "extra": "iterations: 29996226\ncpu: 24.03666151201829 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.1768267581798,
            "unit": "ns/iter",
            "extra": "iterations: 26951939\ncpu: 26.17655987571059 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 413.93104679640265,
            "unit": "ns/iter",
            "extra": "iterations: 1716628\ncpu: 413.9270587453984 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6825.923501924953,
            "unit": "ns/iter",
            "extra": "iterations: 102081\ncpu: 6825.725325966744 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 113572.61722326015,
            "unit": "ns/iter",
            "extra": "iterations: 5899\ncpu: 113568.5189015089 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1995145.3739612515,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 1994781.911357356 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 412.51747542487055,
            "unit": "ns/iter",
            "extra": "iterations: 1776695\ncpu: 412.4759342487041 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 451.16014298374154,
            "unit": "ns/iter",
            "extra": "iterations: 812680\ncpu: 895.6412991583509 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 202.4973778189362,
            "unit": "ns/iter",
            "extra": "iterations: 1423052\ncpu: 472.0405775755129 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6697.236145041406,
            "unit": "ns/iter",
            "extra": "iterations: 103970\ncpu: 6696.514879291929 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8375.240313532116,
            "unit": "ns/iter",
            "extra": "iterations: 45992\ncpu: 16663.60730126939 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3604.3293310833155,
            "unit": "ns/iter",
            "extra": "iterations: 104004\ncpu: 7668.313776393172 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 116856.97653814986,
            "unit": "ns/iter",
            "extra": "iterations: 6095\ncpu: 116816.97752255875 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 162423.0024975004,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 316924.1978022053 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 85691.40668901734,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 161571.1752873563 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1887698.2492668682,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 1887606.7859237662 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1449096215.4999921,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1634521157.5000067 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1369003371.0624902,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1708208445.2500017 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55851630+Sandeep-BlackHat@users.noreply.github.com",
            "name": "Ryuzaki Lawliet",
            "username": "Sandeep-BlackHat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a07ac0562da274729234f719efb059ab25c07ddb",
          "message": "Update README.md (#66)",
          "timestamp": "2021-10-12T10:09:23+02:00",
          "tree_id": "506a7ba9f095ef23d97e6964e5de0caae438558f",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/a07ac0562da274729234f719efb059ab25c07ddb"
        },
        "date": 1634026708107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.333124239403162,
            "unit": "ns/iter",
            "extra": "iterations: 45655717\ncpu: 15.332332005650025 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.492952259754988,
            "unit": "ns/iter",
            "extra": "iterations: 45174338\ncpu: 15.49231990959115 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.6841283492236956,
            "unit": "ns/iter",
            "extra": "iterations: 189912703\ncpu: 3.6840142915558425 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.485250008614352,
            "unit": "ns/iter",
            "extra": "iterations: 106799520\ncpu: 6.484536803161661 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 263.30226797907363,
            "unit": "ns/iter",
            "extra": "iterations: 2659372\ncpu: 263.28479656099273 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71815.36849146096,
            "unit": "ns/iter",
            "extra": "iterations: 9718\ncpu: 71813.79666598064 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21641750.960000083,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21640366.52 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10591898852.000042,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10591130851 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.09356773154492,
            "unit": "ns/iter",
            "extra": "iterations: 34825863\ncpu: 20.0925085474551 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.105004191622907,
            "unit": "ns/iter",
            "extra": "iterations: 31654803\ncpu: 22.102976789967663 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 456.3586338787595,
            "unit": "ns/iter",
            "extra": "iterations: 1534183\ncpu: 456.32930882430577 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75380.89118501579,
            "unit": "ns/iter",
            "extra": "iterations: 9291\ncpu: 75376.55968141196 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26944964.636363763,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26943850.939393964 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11798314289.000017,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11797408248 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 465.9974018831124,
            "unit": "ns/iter",
            "extra": "iterations: 1501857\ncpu: 465.96992723008987 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 573.6966138941779,
            "unit": "ns/iter",
            "extra": "iterations: 597028\ncpu: 1141.890636620055 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 296.38703667632393,
            "unit": "ns/iter",
            "extra": "iterations: 1108944\ncpu: 628.9675339782702 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75323.26674563931,
            "unit": "ns/iter",
            "extra": "iterations: 9286\ncpu: 75315.21236269691 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 60811.363838642385,
            "unit": "ns/iter",
            "extra": "iterations: 6966\ncpu: 96426.54766006334 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 26321.899792128617,
            "unit": "ns/iter",
            "extra": "iterations: 18040\ncpu: 38977.41945676258 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 24379020.85185223,
            "unit": "ns/iter",
            "extra": "iterations: 27\ncpu: 24302569.777777843 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 17721534.769231305,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 29655388.69230755 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8886209.906250287,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 14616828.675000098 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10523965322.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10523053146.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4304080822.000003,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4855667304.500001 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2059726023.7499988,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2420767504.2499995 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.393469450406015,
            "unit": "ns/iter",
            "extra": "iterations: 292284374\ncpu: 2.3932368207956207 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.023372860617286,
            "unit": "ns/iter",
            "extra": "iterations: 139393421\ncpu: 5.022826192062516 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 86.79281391600048,
            "unit": "ns/iter",
            "extra": "iterations: 8023285\ncpu: 86.78957284952443 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1825.1509306341904,
            "unit": "ns/iter",
            "extra": "iterations: 379956\ncpu: 1825.0387676467892 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30721.00959684576,
            "unit": "ns/iter",
            "extra": "iterations: 22820\ncpu: 30718.118886941185 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 885367.5929951734,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 885260.3309178727 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.763193724021228,
            "unit": "ns/iter",
            "extra": "iterations: 35377559\ncpu: 19.762177854045575 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.76674833073554,
            "unit": "ns/iter",
            "extra": "iterations: 32132859\ncpu: 21.765422802869573 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 335.1092817150891,
            "unit": "ns/iter",
            "extra": "iterations: 2089700\ncpu: 335.1103325836266 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5442.544248340303,
            "unit": "ns/iter",
            "extra": "iterations: 128050\ncpu: 5442.254814525577 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88297.7237555121,
            "unit": "ns/iter",
            "extra": "iterations: 7935\ncpu: 88291.21335853887 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1636301.6798145606,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 1636127.8607888673 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.76399034584347,
            "unit": "ns/iter",
            "extra": "iterations: 2021930\ncpu: 345.7156716602447 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 435.0704090688641,
            "unit": "ns/iter",
            "extra": "iterations: 998316\ncpu: 868.2678009768396 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 230.19769351606934,
            "unit": "ns/iter",
            "extra": "iterations: 1490212\ncpu: 461.29746908493166 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5631.293972879112,
            "unit": "ns/iter",
            "extra": "iterations: 122712\ncpu: 5630.817703240178 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7446.920286415979,
            "unit": "ns/iter",
            "extra": "iterations: 46366\ncpu: 14878.71850062521 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3745.061194772451,
            "unit": "ns/iter",
            "extra": "iterations: 94428\ncpu: 7473.26903037241 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 92114.2038552935,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 92093.59189332076 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 65829.7474660177,
            "unit": "ns/iter",
            "extra": "iterations: 8682\ncpu: 95563.27562773558 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 77366.3870950995,
            "unit": "ns/iter",
            "extra": "iterations: 4816\ncpu: 149012.29526577948 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1741094.1374998856,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 1740967.6274999697 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 4413042478.249963,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4597074558.500008 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 882467324.0625103,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1045554195.9999963 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43717566+Dishantdhillon@users.noreply.github.com",
            "name": "Dishant",
            "username": "Dishantdhillon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15fd2ab0e62753afff2c8f96958a8c5d43906850",
          "message": "Thread-Safe version of Floyed-Warshall Algorithm (#77)\n\n* Update Graph_TS.hpp\r\n\r\n* Update Graph_TS.hpp\r\n\r\n* Update Graph_TS.hpp",
          "timestamp": "2021-10-12T10:54:42+02:00",
          "tree_id": "2a42902acb17792f569b98bcae01d4c808f4ff53",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/15fd2ab0e62753afff2c8f96958a8c5d43906850"
        },
        "date": 1634029419048,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.320819122189526,
            "unit": "ns/iter",
            "extra": "iterations: 45689496\ncpu: 15.318466655880817 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.49670913018333,
            "unit": "ns/iter",
            "extra": "iterations: 45204766\ncpu: 15.495800221596104 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.6856466527564775,
            "unit": "ns/iter",
            "extra": "iterations: 189906567\ncpu: 3.6854877377673847 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.472755697407002,
            "unit": "ns/iter",
            "extra": "iterations: 108866982\ncpu: 6.47241319686808 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 261.75050595140914,
            "unit": "ns/iter",
            "extra": "iterations: 2675158\ncpu: 261.71963786811847 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71946.64690774753,
            "unit": "ns/iter",
            "extra": "iterations: 9734\ncpu: 71944.31446476263 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21642613.44000124,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21642202.87999999 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10627719310.000032,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10627112082 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.095947714954374,
            "unit": "ns/iter",
            "extra": "iterations: 34833211\ncpu: 20.095331693653016 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.104988079391635,
            "unit": "ns/iter",
            "extra": "iterations: 31674977\ncpu: 22.102934155248168 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 462.4633020674248,
            "unit": "ns/iter",
            "extra": "iterations: 1533833\ncpu: 462.4534757043293 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75412.55817457793,
            "unit": "ns/iter",
            "extra": "iterations: 9291\ncpu: 75408.94101818939 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26953753.757575005,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26953232.0909091 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11830160906.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11829317633.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 465.25747882353687,
            "unit": "ns/iter",
            "extra": "iterations: 1504147\ncpu: 465.215341319696 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 550.2492285219249,
            "unit": "ns/iter",
            "extra": "iterations: 632552\ncpu: 1095.6507180437352 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 319.76287727132814,
            "unit": "ns/iter",
            "extra": "iterations: 1090992\ncpu: 682.4875104492031 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75260.277610658,
            "unit": "ns/iter",
            "extra": "iterations: 9308\ncpu: 75255.12247529 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 60294.53500884283,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 95798.18602594433 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 27557.635051168443,
            "unit": "ns/iter",
            "extra": "iterations: 12312\ncpu: 48884.31432748512 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26597763.78571418,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 26546002.75000009 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 16796405.649999715,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 28182688.94999987 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9060488.762499474,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 16151550.0000001 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10571800220.999989,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10570656637.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4474152484.000001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4987582813.499998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1735772746.687502,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2389395674.250001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3935790417436635,
            "unit": "ns/iter",
            "extra": "iterations: 292503568\ncpu: 2.3935486045079584 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.023503042635628,
            "unit": "ns/iter",
            "extra": "iterations: 139292561\ncpu: 5.0232212400775476 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 86.93164772523032,
            "unit": "ns/iter",
            "extra": "iterations: 7988571\ncpu: 86.92867635525786 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1873.1683818601962,
            "unit": "ns/iter",
            "extra": "iterations: 378966\ncpu: 1873.1279375986123 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30673.246806650248,
            "unit": "ns/iter",
            "extra": "iterations: 22860\ncpu: 30664.3154855643 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 935985.621468925,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 935944.8234463378 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.75634603238893,
            "unit": "ns/iter",
            "extra": "iterations: 35425678\ncpu: 19.755759480453865 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.762972953313298,
            "unit": "ns/iter",
            "extra": "iterations: 32168080\ncpu: 21.762255440797066 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 335.02705136184204,
            "unit": "ns/iter",
            "extra": "iterations: 2090209\ncpu: 335.01947556440507 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5444.394038703879,
            "unit": "ns/iter",
            "extra": "iterations: 128462\ncpu: 5444.035426818849 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88230.46631406422,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 88228.06321621966 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1719492.1928571765,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 1719391.5238095094 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 346.0734586188103,
            "unit": "ns/iter",
            "extra": "iterations: 2017898\ncpu: 346.0056638145262 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 502.5342507583939,
            "unit": "ns/iter",
            "extra": "iterations: 700802\ncpu: 1003.2467501519561 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 218.30266079451079,
            "unit": "ns/iter",
            "extra": "iterations: 1432636\ncpu: 445.268478524887 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5630.520326389035,
            "unit": "ns/iter",
            "extra": "iterations: 123411\ncpu: 5629.993460874522 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8128.893916570606,
            "unit": "ns/iter",
            "extra": "iterations: 43150\ncpu: 16225.487161066096 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3539.716152414661,
            "unit": "ns/iter",
            "extra": "iterations: 87052\ncpu: 7099.475175756949 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91828.26317179564,
            "unit": "ns/iter",
            "extra": "iterations: 7573\ncpu: 91801.99498217557 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 160921.72845952987,
            "unit": "ns/iter",
            "extra": "iterations: 2298\ncpu: 311869.09225413424 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 75811.2409855802,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 155675.31310096124 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1881655.9317582953,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 1881636.86614171 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1179940575.7499812,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1296180901.0000072 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1454601994.3124974,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1600395179.5000043 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51043033+sidml@users.noreply.github.com",
            "name": "Siddhartha",
            "username": "sidml"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2713bbbc0a3f22b8f156fbf27a1eff0c1fed0b76",
          "message": "add bellman-ford description (#79)",
          "timestamp": "2021-10-12T15:32:27+02:00",
          "tree_id": "b9edb221e5c17ae60e6fb46966cce19e6c5243ba",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/2713bbbc0a3f22b8f156fbf27a1eff0c1fed0b76"
        },
        "date": 1634046077006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000062512e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.38048496391368,
            "unit": "ns/iter",
            "extra": "iterations: 45551348\ncpu: 15.379367477774752 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999999119823e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.597627748074117,
            "unit": "ns/iter",
            "extra": "iterations: 44916646\ncpu: 15.596977565956283 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 0.0000012000000424450263,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 0.0000012000000000345066 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.682333670091962,
            "unit": "ns/iter",
            "extra": "iterations: 190134296\ncpu: 3.682108560782744 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.52804691709471,
            "unit": "ns/iter",
            "extra": "iterations: 108398527\ncpu: 6.527739735799181 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 261.04654113138025,
            "unit": "ns/iter",
            "extra": "iterations: 2682380\ncpu: 261.02644629023456 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71891.72560913337,
            "unit": "ns/iter",
            "extra": "iterations: 9727\ncpu: 71886.95589595973 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21638654.799999133,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21636739.600000005 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10707218968.000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10703965473 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.095463079085494,
            "unit": "ns/iter",
            "extra": "iterations: 34864725\ncpu: 20.09373996209637 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.085435464917545,
            "unit": "ns/iter",
            "extra": "iterations: 31687122\ncpu: 22.084460368474055 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 455.9619490338406,
            "unit": "ns/iter",
            "extra": "iterations: 1506059\ncpu: 455.9506008728738 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75288.05007522217,
            "unit": "ns/iter",
            "extra": "iterations: 9306\ncpu: 75284.86105738224 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26942573.06060618,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26941207.000000026 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 12013181657.00002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 12011623957.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 469.5879327915357,
            "unit": "ns/iter",
            "extra": "iterations: 1505286\ncpu: 469.58308919368227 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 614.3149482442067,
            "unit": "ns/iter",
            "extra": "iterations: 566120\ncpu: 1227.2288896347054 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 333.04586843597775,
            "unit": "ns/iter",
            "extra": "iterations: 987580\ncpu: 731.6970078373392 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75332.19406834006,
            "unit": "ns/iter",
            "extra": "iterations: 9306\ncpu: 75326.72361917069 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 59189.6766977564,
            "unit": "ns/iter",
            "extra": "iterations: 6862\ncpu: 94775.12401632225 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 25617.650390221042,
            "unit": "ns/iter",
            "extra": "iterations: 19348\ncpu: 45938.88045275998 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26345463.21428591,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 26344341.32142844 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 19248912.474999715,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32016070.900000088 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8888257.468749927,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 14563199.375000015 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10439537228.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10438543533 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4023517193.7499957,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5067658181.000002 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1723636786.0624995,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2582830990.25 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.392918321783288,
            "unit": "ns/iter",
            "extra": "iterations: 292551135\ncpu: 2.3923963583323595 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.020898027619292,
            "unit": "ns/iter",
            "extra": "iterations: 139440767\ncpu: 5.020558808314628 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 86.75182882035253,
            "unit": "ns/iter",
            "extra": "iterations: 8038105\ncpu: 86.74619204402003 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1860.0087438590785,
            "unit": "ns/iter",
            "extra": "iterations: 377179\ncpu: 1859.995461041043 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 31015.245783858965,
            "unit": "ns/iter",
            "extra": "iterations: 23244\ncpu: 31012.618051970323 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 892630.4562499609,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 892598.9387500088 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.75459130303772,
            "unit": "ns/iter",
            "extra": "iterations: 35440048\ncpu: 19.754026941498527 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.758049320277816,
            "unit": "ns/iter",
            "extra": "iterations: 32166039\ncpu: 21.757424437618617 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.8248530281964,
            "unit": "ns/iter",
            "extra": "iterations: 2090707\ncpu: 334.815239055493 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5442.318835154306,
            "unit": "ns/iter",
            "extra": "iterations: 128223\ncpu: 5442.0545689930605 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88143.66578417046,
            "unit": "ns/iter",
            "extra": "iterations: 7932\ncpu: 88133.07665153724 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1631604.1931035237,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 1631480.3218390665 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.9866035406291,
            "unit": "ns/iter",
            "extra": "iterations: 2020086\ncpu: 345.9233864300737 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 454.26743587642073,
            "unit": "ns/iter",
            "extra": "iterations: 656778\ncpu: 899.9640076250962 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 262.6708971448308,
            "unit": "ns/iter",
            "extra": "iterations: 1320556\ncpu: 526.5847817131609 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5642.847227989794,
            "unit": "ns/iter",
            "extra": "iterations: 122817\ncpu: 5641.589193678282 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8595.904696641284,
            "unit": "ns/iter",
            "extra": "iterations: 54358\ncpu: 17163.88555502391 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3667.4266902306117,
            "unit": "ns/iter",
            "extra": "iterations: 110340\ncpu: 7719.262860250282 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 92026.47344141062,
            "unit": "ns/iter",
            "extra": "iterations: 7587\ncpu: 91989.62462106232 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 289062.28027347766,
            "unit": "ns/iter",
            "extra": "iterations: 1024\ncpu: 536104.7138671714 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 142919.9347656211,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 261690.05833333402 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1736693.4160583692,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 1736585.357664223 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2455177115.250024,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2619330560.999993 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1021611052.124996,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1188054896.2499993 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51043033+sidml@users.noreply.github.com",
            "name": "Siddhartha",
            "username": "sidml"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ad6970e464c7009cee36231523a8593b6022507",
          "message": "Graph Slicing based on connectivity (#82)\n\n* add graph slicing algorithm\r\n\r\n* add graph slicing test cases\r\n\r\n* update readme",
          "timestamp": "2021-10-13T09:03:57+02:00",
          "tree_id": "7f4da9680d4f17714b0b5c982cedc42c9859d200",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/8ad6970e464c7009cee36231523a8593b6022507"
        },
        "date": 1634109169028,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.00000000020129e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.364473891435338,
            "unit": "ns/iter",
            "extra": "iterations: 45653410\ncpu: 15.35129535778379 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.500285084051807,
            "unit": "ns/iter",
            "extra": "iterations: 45207720\ncpu: 15.499058302431534 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 7.000000152856956e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.682865143535597,
            "unit": "ns/iter",
            "extra": "iterations: 190106022\ncpu: 3.682681025222862 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.499624321412389,
            "unit": "ns/iter",
            "extra": "iterations: 108192219\ncpu: 6.499064299623988 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 261.0459593446849,
            "unit": "ns/iter",
            "extra": "iterations: 2681174\ncpu: 261.03294303167206 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 72266.77167302134,
            "unit": "ns/iter",
            "extra": "iterations: 9701\ncpu: 72261.60065972584 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21623965.60000047,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21623657.35999998 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10525022312.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10524274348.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999975221272e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.113233304460945,
            "unit": "ns/iter",
            "extra": "iterations: 34839741\ncpu: 20.095865207494015 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.095034414168943,
            "unit": "ns/iter",
            "extra": "iterations: 31678377\ncpu: 22.094330463962923 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 640.5826230000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 640.5461169999995 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75268.48811324935,
            "unit": "ns/iter",
            "extra": "iterations: 9254\ncpu: 75267.78506591749 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26980024.090908665,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26978105.090909112 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11744144118.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11743109684.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 481.6636029130849,
            "unit": "ns/iter",
            "extra": "iterations: 1503711\ncpu: 481.66419943726015 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 528.3431556909468,
            "unit": "ns/iter",
            "extra": "iterations: 694504\ncpu: 1054.5366146199358 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 295.3069624671613,
            "unit": "ns/iter",
            "extra": "iterations: 1131596\ncpu: 647.2398426646955 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 77017.21520354187,
            "unit": "ns/iter",
            "extra": "iterations: 9261\ncpu: 77013.73069862896 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 58163.95912453944,
            "unit": "ns/iter",
            "extra": "iterations: 8110\ncpu: 92283.17385943289 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 21949.205147059758,
            "unit": "ns/iter",
            "extra": "iterations: 18360\ncpu: 33918.10615468392 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26494880.821427308,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 26494476.500000175 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 17027211.35000047,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 28455671.5 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 8456867.500000343,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 15269658.275000025 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10548467930.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10545025143.999992 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 3842292352.250013,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4919321827.000001 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1806600399.4374995,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2362110603.9999995 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.393017714732152,
            "unit": "ns/iter",
            "extra": "iterations: 292364623\ncpu: 2.39295250848459 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.034823342941302,
            "unit": "ns/iter",
            "extra": "iterations: 139394515\ncpu: 5.0345705926807875 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 86.7919130690624,
            "unit": "ns/iter",
            "extra": "iterations: 8001478\ncpu: 86.78944215056306 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1824.1676400228444,
            "unit": "ns/iter",
            "extra": "iterations: 384580\ncpu: 1824.0635836496951 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 31682.373047226494,
            "unit": "ns/iter",
            "extra": "iterations: 22276\ncpu: 31679.60118513212 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 852451.1210340705,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 852386.8119859021 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.75868021128089,
            "unit": "ns/iter",
            "extra": "iterations: 35430762\ncpu: 19.757052924800014 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.764484264675154,
            "unit": "ns/iter",
            "extra": "iterations: 32170135\ncpu: 21.763974443998862 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 335.1065849901534,
            "unit": "ns/iter",
            "extra": "iterations: 2090360\ncpu: 335.0872533917631 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5431.263424809336,
            "unit": "ns/iter",
            "extra": "iterations: 128959\ncpu: 5429.9235648538715 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88759.87455695982,
            "unit": "ns/iter",
            "extra": "iterations: 7900\ncpu: 88754.16392405173 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1611055.8949771083,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 1610991.020547943 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 346.0205585190457,
            "unit": "ns/iter",
            "extra": "iterations: 2022957\ncpu: 346.01209763725853 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 468.5147337669551,
            "unit": "ns/iter",
            "extra": "iterations: 738338\ncpu: 934.4987932356347 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 236.70423253593216,
            "unit": "ns/iter",
            "extra": "iterations: 1450348\ncpu: 473.9417077832415 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5610.751906273468,
            "unit": "ns/iter",
            "extra": "iterations: 122228\ncpu: 5610.24546748686 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7604.373632099884,
            "unit": "ns/iter",
            "extra": "iterations: 46056\ncpu: 15179.597207747018 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3815.7090309868754,
            "unit": "ns/iter",
            "extra": "iterations: 126376\ncpu: 7639.001147369655 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 91363.37701269271,
            "unit": "ns/iter",
            "extra": "iterations: 7639\ncpu: 91353.43932451642 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 1291526.4711539776,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 2265101.019230695 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 304161.1808562942,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 548881.6092519687 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1755219.4371979428,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 1755098.944444476 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1665521037.5000138,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1816610612.499996 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1043809847.9999951,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1249524168.4999993 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b18ac25f94dd2378c2e4b627abe469b4ef63dad",
          "message": "Update References Section of README.md",
          "timestamp": "2021-10-13T09:16:13+02:00",
          "tree_id": "0ddd3378c6a160d966915d974e2c5ff153ccc3a0",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/0b18ac25f94dd2378c2e4b627abe469b4ef63dad"
        },
        "date": 1634109923357,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.352938462935047,
            "unit": "ns/iter",
            "extra": "iterations: 45631799\ncpu: 15.351370367843705 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.477031166377179,
            "unit": "ns/iter",
            "extra": "iterations: 45149071\ncpu: 15.475579597197028 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.6861445342717376,
            "unit": "ns/iter",
            "extra": "iterations: 190018268\ncpu: 3.685919266457054 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.457167307830609,
            "unit": "ns/iter",
            "extra": "iterations: 108595252\ncpu: 6.45708152139101 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 262.8506149676867,
            "unit": "ns/iter",
            "extra": "iterations: 2662335\ncpu: 262.84888791230264 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71877.41901336377,
            "unit": "ns/iter",
            "extra": "iterations: 9730\ncpu: 71870.73946557047 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21629996.120000213,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21627149.800000004 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10562091268.99995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10561167041 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999975221272e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.091107501346784,
            "unit": "ns/iter",
            "extra": "iterations: 34841917\ncpu: 20.090186225976026 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.096892512434223,
            "unit": "ns/iter",
            "extra": "iterations: 31668928\ncpu: 22.09690839550994 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 456.35771890301265,
            "unit": "ns/iter",
            "extra": "iterations: 1534104\ncpu: 456.32538602337314 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75352.03455327886,
            "unit": "ns/iter",
            "extra": "iterations: 9290\ncpu: 75352.13143164689 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26952339.121211562,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26949499.15151517 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11766585453.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11765476666.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 473.06828255346346,
            "unit": "ns/iter",
            "extra": "iterations: 1478899\ncpu: 473.0323808454808 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 606.8235425473184,
            "unit": "ns/iter",
            "extra": "iterations: 577686\ncpu: 1207.6019913932494 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 307.452861563112,
            "unit": "ns/iter",
            "extra": "iterations: 1047452\ncpu: 658.1866042548962 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75207.00580083244,
            "unit": "ns/iter",
            "extra": "iterations: 9309\ncpu: 75200.29176066138 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 63575.43155802963,
            "unit": "ns/iter",
            "extra": "iterations: 6290\ncpu: 101692.27249602563 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 23561.166930379626,
            "unit": "ns/iter",
            "extra": "iterations: 15168\ncpu: 40933.10574894546 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26308746.357143167,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 26302643.249999948 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 18996282.76923037,
            "unit": "ns/iter",
            "extra": "iterations: 26\ncpu: 31390808.923076972 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9126104.580357263,
            "unit": "ns/iter",
            "extra": "iterations: 56\ncpu: 16246430.857142832 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10534613852.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10533516546.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4371884658.249996,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4931110768 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1785831312.7500055,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2456949389.75 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.392850696507279,
            "unit": "ns/iter",
            "extra": "iterations: 292468938\ncpu: 2.392670858605828 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.021837842751517,
            "unit": "ns/iter",
            "extra": "iterations: 139320309\ncpu: 5.020645661932905 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 87.36290236746612,
            "unit": "ns/iter",
            "extra": "iterations: 8042524\ncpu: 87.33526116925417 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1857.0525340628867,
            "unit": "ns/iter",
            "extra": "iterations: 378345\ncpu: 1856.8839551203266 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30756.964472631134,
            "unit": "ns/iter",
            "extra": "iterations: 22546\ncpu: 30714.65687926899 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 830465.0156438149,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 830396.453670281 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.747359438744887,
            "unit": "ns/iter",
            "extra": "iterations: 35450986\ncpu: 19.745672630938934 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.75863395803173,
            "unit": "ns/iter",
            "extra": "iterations: 32179187\ncpu: 21.757064527453696 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.8105061538593,
            "unit": "ns/iter",
            "extra": "iterations: 2090965\ncpu: 334.7835324838031 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5455.013404700358,
            "unit": "ns/iter",
            "extra": "iterations: 128164\ncpu: 5454.716995412098 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88791.46317780302,
            "unit": "ns/iter",
            "extra": "iterations: 7930\ncpu: 88783.24110970921 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1639840.8098591291,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 1635146.9577465039 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 345.4079622902091,
            "unit": "ns/iter",
            "extra": "iterations: 2019846\ncpu: 345.3736190778916 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 494.4753742309725,
            "unit": "ns/iter",
            "extra": "iterations: 713196\ncpu: 985.434872040772 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 245.64345694804257,
            "unit": "ns/iter",
            "extra": "iterations: 1445648\ncpu: 496.06295515920436 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5687.099716969439,
            "unit": "ns/iter",
            "extra": "iterations: 121895\ncpu: 5686.780483202694 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8323.814675727046,
            "unit": "ns/iter",
            "extra": "iterations: 41940\ncpu: 16488.91258941365 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4036.3272773081612,
            "unit": "ns/iter",
            "extra": "iterations: 82356\ncpu: 8103.317098936144 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 92607.18908175852,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 92568.99575990405 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 377525.7817138913,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 677729.2786774462 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 142498.09400406835,
            "unit": "ns/iter",
            "extra": "iterations: 3444\ncpu: 262815.5754936095 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1761465.2916665482,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 1761397.4436274834 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3404014526.2499948,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3578619273.9999967 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1183826665.3124876,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1308075941.2500038 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51043033+sidml@users.noreply.github.com",
            "name": "Siddhartha",
            "username": "sidml"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a96979dc125927165575699dc81dd6bd49b383a",
          "message": "Add more tests (#85)\n\n* add graph slicing algorithm\r\n\r\n* add graph slicing test cases\r\n\r\n* update readme\r\n\r\n* improve test coverage",
          "timestamp": "2021-10-13T12:53:34+02:00",
          "tree_id": "4d2035f744390448257ac2c3a096a94368cb456c",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/5a96979dc125927165575699dc81dd6bd49b383a"
        },
        "date": 1634123007889,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 17.809251202606358,
            "unit": "ns/iter",
            "extra": "iterations: 38644165\ncpu: 17.807051594982056 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.009999987734773e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 9.000000000813912e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.21551010484163,
            "unit": "ns/iter",
            "extra": "iterations: 38414505\ncpu: 18.214088610539168 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 9.000000000813912e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.3647254579161325,
            "unit": "ns/iter",
            "extra": "iterations: 163757590\ncpu: 4.364485255309387 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.954941056088322,
            "unit": "ns/iter",
            "extra": "iterations: 90533014\ncpu: 7.954449500598756 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 305.6993478126688,
            "unit": "ns/iter",
            "extra": "iterations: 2284773\ncpu: 305.68307486126616 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 84483.63196711658,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 84481.08281948975 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 25639085.571429275,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 25639105.52380951 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11931584309.000015,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11930717519.999998 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 24.0007101861315,
            "unit": "ns/iter",
            "extra": "iterations: 29036050\ncpu: 23.999166966581203 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 26.2839945622324,
            "unit": "ns/iter",
            "extra": "iterations: 26752889\ncpu: 26.28374445840225 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 549.1258582568996,
            "unit": "ns/iter",
            "extra": "iterations: 1270016\ncpu: 549.1071065246418 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 88518.17100894358,
            "unit": "ns/iter",
            "extra": "iterations: 7830\ncpu: 88512.84380587506 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 31692935.85714123,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 31691700.357142925 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13490974773.999994,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13489955487.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 552.8007333779052,
            "unit": "ns/iter",
            "extra": "iterations: 1259378\ncpu: 552.7914414893683 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 635.043015479896,
            "unit": "ns/iter",
            "extra": "iterations: 570934\ncpu: 1245.5908213558846 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 320.8420110507496,
            "unit": "ns/iter",
            "extra": "iterations: 998304\ncpu: 689.9813533753265 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 88203.35441602067,
            "unit": "ns/iter",
            "extra": "iterations: 7937\ncpu: 88191.75040947445 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 65605.13034901634,
            "unit": "ns/iter",
            "extra": "iterations: 6590\ncpu: 105215.01562974293 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 30681.589619883565,
            "unit": "ns/iter",
            "extra": "iterations: 13680\ncpu: 45411.61776315779 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 28021590.869563486,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 28016662.000000093 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 20033739.81818222,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 33857399.72727296 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10469918.573863298,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 17034373.999999855 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11785395548.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11784260828.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4297053303.000012,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5700307527.499997 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2376629684.6250014,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2823341169.749998 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.8641767461870686,
            "unit": "ns/iter",
            "extra": "iterations: 244907982\ncpu: 2.8636239753100625 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.890015003817922,
            "unit": "ns/iter",
            "extra": "iterations: 116195758\ncpu: 5.889914277249272 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 102.18830323012797,
            "unit": "ns/iter",
            "extra": "iterations: 6744409\ncpu: 102.18846425239063 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2174.0713477970603,
            "unit": "ns/iter",
            "extra": "iterations: 324537\ncpu: 2173.8955342534055 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 36422.65482872587,
            "unit": "ns/iter",
            "extra": "iterations: 19063\ncpu: 36422.42784451567 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 957675.9679144314,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 957627.616310147 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.9192453214167,
            "unit": "ns/iter",
            "extra": "iterations: 29796738\ncpu: 23.91842402346192 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.78754836097545,
            "unit": "ns/iter",
            "extra": "iterations: 26786835\ncpu: 26.785034588819908 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 396.8538965928433,
            "unit": "ns/iter",
            "extra": "iterations: 1719823\ncpu: 396.8438804458345 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6457.218967504205,
            "unit": "ns/iter",
            "extra": "iterations: 110199\ncpu: 6456.906305864889 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 105056.08083209344,
            "unit": "ns/iter",
            "extra": "iterations: 6730\ncpu: 105051.40817236336 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1840499.308510677,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 1840388.984042591 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 412.7105238010788,
            "unit": "ns/iter",
            "extra": "iterations: 1695300\ncpu: 412.67166873119413 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 536.1492731996473,
            "unit": "ns/iter",
            "extra": "iterations: 641304\ncpu: 1068.0955054077626 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 265.4084670936669,
            "unit": "ns/iter",
            "extra": "iterations: 1258968\ncpu: 534.4227248031716 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6530.315665984051,
            "unit": "ns/iter",
            "extra": "iterations: 106977\ncpu: 6529.98659524939 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8229.870508055024,
            "unit": "ns/iter",
            "extra": "iterations: 41964\ncpu: 16412.508316652675 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4216.420653781395,
            "unit": "ns/iter",
            "extra": "iterations: 113616\ncpu: 8538.895472468808 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 111752.13158726004,
            "unit": "ns/iter",
            "extra": "iterations: 6338\ncpu: 111653.57415588872 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 216181.4477994075,
            "unit": "ns/iter",
            "extra": "iterations: 1954\ncpu: 410421.3828045084 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 82715.58495242456,
            "unit": "ns/iter",
            "extra": "iterations: 5044\ncpu: 159919.5965503557 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1973721.1284915404,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 1973581.5614524677 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3286371038.500022,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3536054895.500002 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 768291440.1249974,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 918455028.7500006 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "78950b5204ac40e318734103303224944efe230b",
          "message": "Update label.yml",
          "timestamp": "2021-10-14T09:06:47Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/92/commits/78950b5204ac40e318734103303224944efe230b"
        },
        "date": 1634214222028,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.341260135257416,
            "unit": "ns/iter",
            "extra": "iterations: 45675335\ncpu: 15.339925432402412 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000000756402e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.490651229800152,
            "unit": "ns/iter",
            "extra": "iterations: 45331310\ncpu: 15.489995524064934 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999998009599e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.6831480975351703,
            "unit": "ns/iter",
            "extra": "iterations: 190008179\ncpu: 3.68296657377049 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.524820671976228,
            "unit": "ns/iter",
            "extra": "iterations: 108087122\ncpu: 6.5248261675428845 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 260.9891474920666,
            "unit": "ns/iter",
            "extra": "iterations: 2681500\ncpu: 260.986984150662 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71728.25207586032,
            "unit": "ns/iter",
            "extra": "iterations: 9755\ncpu: 71726.32475653503 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21618718.879999503,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21618282.639999967 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10603831421.999985,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10603204928.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999975221272e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.08321250404568,
            "unit": "ns/iter",
            "extra": "iterations: 34861167\ncpu: 20.082060305095297 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.08458065998645,
            "unit": "ns/iter",
            "extra": "iterations: 31688438\ncpu: 22.083678217272844 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 456.1746386043492,
            "unit": "ns/iter",
            "extra": "iterations: 1529072\ncpu: 456.16312116107053 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75405.67219291853,
            "unit": "ns/iter",
            "extra": "iterations: 9289\ncpu: 75401.55205081293 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26942773.151514493,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26941821.39393944 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11798578511.999949,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11794169987 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 464.8574658875733,
            "unit": "ns/iter",
            "extra": "iterations: 1505829\ncpu: 464.8366049531488 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 573.3117728382304,
            "unit": "ns/iter",
            "extra": "iterations: 591684\ncpu: 1136.3625059998164 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 318.45105166981557,
            "unit": "ns/iter",
            "extra": "iterations: 1278348\ncpu: 684.3421799071945 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75561.61694370244,
            "unit": "ns/iter",
            "extra": "iterations: 9325\ncpu: 75548.2435388739 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 61881.474519941956,
            "unit": "ns/iter",
            "extra": "iterations: 6770\ncpu: 98773.19867060542 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 24898.03490532926,
            "unit": "ns/iter",
            "extra": "iterations: 14260\ncpu: 39489.096283310064 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26514787.92857022,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 26510303.32142871 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 19896529.724998403,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 32927171.350000046 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9738845.818749908,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 15761606.150000002 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10184190630.000046,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10182124269.000006 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4062767799.7500057,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4802603676.5 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2018353259.375001,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2397460988.5 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3927862625828675,
            "unit": "ns/iter",
            "extra": "iterations: 292532023\ncpu: 2.392618759553718 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.02145288988435,
            "unit": "ns/iter",
            "extra": "iterations: 139408817\ncpu: 5.021327352630784 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 87.3035598509365,
            "unit": "ns/iter",
            "extra": "iterations: 8017302\ncpu: 87.3002795703591 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1842.1310197547086,
            "unit": "ns/iter",
            "extra": "iterations: 385377\ncpu: 1842.02145691103 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30285.834630695575,
            "unit": "ns/iter",
            "extra": "iterations: 22610\ncpu: 30285.475939849734 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 852097.687951815,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 852054.201204816 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.743320605519454,
            "unit": "ns/iter",
            "extra": "iterations: 35452016\ncpu: 19.74334599194569 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.76350599548652,
            "unit": "ns/iter",
            "extra": "iterations: 32176710\ncpu: 21.763518333602047 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 334.8244169249495,
            "unit": "ns/iter",
            "extra": "iterations: 2090640\ncpu: 334.82178615160444 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5493.124322101821,
            "unit": "ns/iter",
            "extra": "iterations: 128891\ncpu: 5493.014151492362 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 89561.06840308005,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 89557.42660260595 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1603656.9037557933,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 1603639.788732379 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 344.8753568557738,
            "unit": "ns/iter",
            "extra": "iterations: 2021475\ncpu: 344.8625810361311 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 501.8853517737185,
            "unit": "ns/iter",
            "extra": "iterations: 704686\ncpu: 1002.2830892056786 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 251.9006824376425,
            "unit": "ns/iter",
            "extra": "iterations: 1837384\ncpu: 515.5138626438544 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5644.265409237026,
            "unit": "ns/iter",
            "extra": "iterations: 122313\ncpu: 5643.758431237779 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8286.461142793878,
            "unit": "ns/iter",
            "extra": "iterations: 45590\ncpu: 16535.6604079845 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3927.267210569565,
            "unit": "ns/iter",
            "extra": "iterations: 85340\ncpu: 8283.150363252784 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 92151.84805559316,
            "unit": "ns/iter",
            "extra": "iterations: 7483\ncpu: 92130.95082186344 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 166990.7247583472,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 301259.83190117957 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 83333.96816617525,
            "unit": "ns/iter",
            "extra": "iterations: 4068\ncpu: 164181.41470009697 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1748141.6197529985,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 1747887.3407407808 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3467757579.5000167,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3637952353.0000024 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1365769712.3125062,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1493357518.0000014 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88f6f71c11c6d8f874c8a81fbd18cb4d77856f66",
          "message": "Update label.yml (#92)",
          "timestamp": "2021-10-14T14:15:06+02:00",
          "tree_id": "984d13ce8bb07f445056bd94f48d5ea918698d7d",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/88f6f71c11c6d8f874c8a81fbd18cb4d77856f66"
        },
        "date": 1634214321666,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.414507848912443,
            "unit": "ns/iter",
            "extra": "iterations: 38072150\ncpu: 18.38996082438213 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.68937038467776,
            "unit": "ns/iter",
            "extra": "iterations: 37872490\ncpu: 18.687857703573226 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.331685003581274,
            "unit": "ns/iter",
            "extra": "iterations: 159876586\ncpu: 4.3314559331408296 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 8.062361422306806,
            "unit": "ns/iter",
            "extra": "iterations: 87213261\ncpu: 8.061946921122468 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 311.9690691951902,
            "unit": "ns/iter",
            "extra": "iterations: 2273785\ncpu: 311.9563828594174 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 85221.57453646233,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 85219.58640296667 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 25755358.571427137,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 25755375.238095265 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11829254380.999998,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11825698992 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000661922968e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.999999998593466e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.75697031976965,
            "unit": "ns/iter",
            "extra": "iterations: 29052505\ncpu: 23.755613225090148 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 26.085362889048014,
            "unit": "ns/iter",
            "extra": "iterations: 27038471\ncpu: 26.08420731334988 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 541.8405625813242,
            "unit": "ns/iter",
            "extra": "iterations: 1286925\ncpu: 541.8178914855158 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 90251.75701298122,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 90246.03766233758 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 32356704.142858107,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 32355310.78571428 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13433098017.000021,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13432380584.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 552.549450093914,
            "unit": "ns/iter",
            "extra": "iterations: 1254487\ncpu: 552.5121703134419 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 692.2929471985951,
            "unit": "ns/iter",
            "extra": "iterations: 504608\ncpu: 1383.0610018073514 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 361.475625534702,
            "unit": "ns/iter",
            "extra": "iterations: 850952\ncpu: 780.604210343233 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 89875.0682025146,
            "unit": "ns/iter",
            "extra": "iterations: 7683\ncpu: 89850.89053755054 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 66685.79387188166,
            "unit": "ns/iter",
            "extra": "iterations: 5744\ncpu: 106591.1183844006 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 27900.19075933681,
            "unit": "ns/iter",
            "extra": "iterations: 17028\ncpu: 44273.74565421658 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 28678903.086954407,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 28674992.173913106 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 21625630.2916662,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 36185551.75 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10582135.406249905,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 18285038.27500009 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11393281777.000084,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11392285105 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5386550414.499993,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 6154376487.500002 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2493115280.375001,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2949164972.2499995 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.8293717041003763,
            "unit": "ns/iter",
            "extra": "iterations: 245749861\ncpu: 2.829036216626793 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.977627501237566,
            "unit": "ns/iter",
            "extra": "iterations: 116209460\ncpu: 5.977371059120305 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 103.13135137213759,
            "unit": "ns/iter",
            "extra": "iterations: 6888295\ncpu: 103.1278808471472 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2152.207988389707,
            "unit": "ns/iter",
            "extra": "iterations: 316960\ncpu: 2152.0247412922963 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 36239.97046656434,
            "unit": "ns/iter",
            "extra": "iterations: 19097\ncpu: 36238.31628004407 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 927800.4641408394,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 927768.400541271 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.7459713503651,
            "unit": "ns/iter",
            "extra": "iterations: 29410289\ncpu: 23.745038343553976 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.311349875234814,
            "unit": "ns/iter",
            "extra": "iterations: 26674769\ncpu: 26.310238787822136 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 401.7244460538304,
            "unit": "ns/iter",
            "extra": "iterations: 1759151\ncpu: 401.7220448955234 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6521.894776536277,
            "unit": "ns/iter",
            "extra": "iterations: 107400\ncpu: 6521.608445065267 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 106009.93883746382,
            "unit": "ns/iter",
            "extra": "iterations: 6589\ncpu: 106004.81939596309 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1903580.9407007718,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 1903470.6226414612 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 412.9223893412343,
            "unit": "ns/iter",
            "extra": "iterations: 1695798\ncpu: 412.84947204796697 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 528.6146128945554,
            "unit": "ns/iter",
            "extra": "iterations: 606088\ncpu: 1047.3204303665277 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 278.2873909018213,
            "unit": "ns/iter",
            "extra": "iterations: 1195712\ncpu: 566.6893633249364 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6746.382091494634,
            "unit": "ns/iter",
            "extra": "iterations: 96859\ncpu: 6745.8512786629 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9135.280431007326,
            "unit": "ns/iter",
            "extra": "iterations: 38004\ncpu: 18248.27241869256 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4728.588673179052,
            "unit": "ns/iter",
            "extra": "iterations: 76672\ncpu: 9483.470562917391 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 110460.8140791279,
            "unit": "ns/iter",
            "extra": "iterations: 6293\ncpu: 110453.97314476733 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 1688734.4845238365,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2974816.238095263 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 701067.3630725619,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1214228.7022900896 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2000451.3494320328,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2000337.9687499776 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 4076949517.4999976,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4287607391.4999876 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1249614619.2500036,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1394038583.4999967 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51043033+sidml@users.noreply.github.com",
            "name": "Siddhartha",
            "username": "sidml"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e95bdc88d8a6408963096d41ef9a498bc1cc85ca",
          "message": "Prim's algorithm for finding minimum spanning tree (#89)\n\n* add graph slicing algorithm\r\n\r\n* add graph slicing test cases\r\n\r\n* update readme\r\n\r\n* improve test coverage\r\n\r\n* add prim's algorithm\r\n\r\n* prim test & result struct\r\n\r\n* cmake & new error message",
          "timestamp": "2021-10-14T14:44:51+02:00",
          "tree_id": "a9752c4ddb4dafe5d61f578fad33581dbcf95d98",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/e95bdc88d8a6408963096d41ef9a498bc1cc85ca"
        },
        "date": 1634216051972,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.00000000020129e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.3642573116648,
            "unit": "ns/iter",
            "extra": "iterations: 45695231\ncpu: 15.350118221308477 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.731315150096975,
            "unit": "ns/iter",
            "extra": "iterations: 45286770\ncpu: 15.576415429936825 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.6824787386367235,
            "unit": "ns/iter",
            "extra": "iterations: 190113162\ncpu: 3.6820616659881753 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.543207048708031,
            "unit": "ns/iter",
            "extra": "iterations: 105411539\ncpu: 6.542707236254278 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 263.46784711375017,
            "unit": "ns/iter",
            "extra": "iterations: 2683616\ncpu: 263.4543600872851 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 71697.33377891708,
            "unit": "ns/iter",
            "extra": "iterations: 9725\ncpu: 71694.15568123387 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 21612368.360001713,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 21611832.279999986 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 10543575636.000013,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10542901941 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999975221272e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 20.096158760983364,
            "unit": "ns/iter",
            "extra": "iterations: 34843523\ncpu: 20.094155490534007 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 22.09391359570741,
            "unit": "ns/iter",
            "extra": "iterations: 31678704\ncpu: 22.09296974396428 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 456.14449108124063,
            "unit": "ns/iter",
            "extra": "iterations: 1535029\ncpu: 456.11862707479816 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 75290.74765953115,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 75288.15463251919 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 26890780.333332893,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 26888907.696969666 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 11921537044.000048,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11920655559.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 465.4704667341569,
            "unit": "ns/iter",
            "extra": "iterations: 1503254\ncpu: 465.42988942653767 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 647.6401915682114,
            "unit": "ns/iter",
            "extra": "iterations: 582560\ncpu: 1285.5603096676814 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 336.1478555611553,
            "unit": "ns/iter",
            "extra": "iterations: 1084736\ncpu: 712.8349579990011 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 75215.04683462574,
            "unit": "ns/iter",
            "extra": "iterations: 9288\ncpu: 75200.29608096444 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 60561.52683700754,
            "unit": "ns/iter",
            "extra": "iterations: 6614\ncpu: 96056.66555790717 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 28904.930817474033,
            "unit": "ns/iter",
            "extra": "iterations: 11560\ncpu: 54111.39783737007 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 26352769.78571507,
            "unit": "ns/iter",
            "extra": "iterations: 28\ncpu: 26344631.500000153 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 18697827.649999965,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 31377626.549999733 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 9081632.7451927,
            "unit": "ns/iter",
            "extra": "iterations: 52\ncpu: 15148655.88461529 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 10524368038.999968,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10523374740.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4503802374.249986,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4925786115.500001 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1883076604.312496,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2450278439.25 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.395077961785869,
            "unit": "ns/iter",
            "extra": "iterations: 292355796\ncpu: 2.394253969228631 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.02143159723392,
            "unit": "ns/iter",
            "extra": "iterations: 139348970\ncpu: 5.0211079924021025 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 86.91031330138593,
            "unit": "ns/iter",
            "extra": "iterations: 7990070\ncpu: 86.90880968502132 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1835.3991424657027,
            "unit": "ns/iter",
            "extra": "iterations: 375262\ncpu: 1835.3682174054463 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 30852.42444483605,
            "unit": "ns/iter",
            "extra": "iterations: 22606\ncpu: 30851.800274263343 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 829742.8906249849,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 829621.9999999871 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 19.77389481226374,
            "unit": "ns/iter",
            "extra": "iterations: 35421810\ncpu: 19.772630252378562 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 21.770718480814466,
            "unit": "ns/iter",
            "extra": "iterations: 32158270\ncpu: 21.7697112126989 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 335.1050344749311,
            "unit": "ns/iter",
            "extra": "iterations: 2088619\ncpu: 335.08545646668847 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5451.415102571862,
            "unit": "ns/iter",
            "extra": "iterations: 128349\ncpu: 5451.2546182673 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 88519.86056230987,
            "unit": "ns/iter",
            "extra": "iterations: 7896\ncpu: 88512.2499999996 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1588114.5675058186,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 1588021.8604118952 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 346.1155931293587,
            "unit": "ns/iter",
            "extra": "iterations: 2022923\ncpu: 346.08760887092177 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 523.3835968777349,
            "unit": "ns/iter",
            "extra": "iterations: 665416\ncpu: 1043.4648250116932 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 256.468430359891,
            "unit": "ns/iter",
            "extra": "iterations: 1610796\ncpu: 514.4598062076251 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5657.103358918251,
            "unit": "ns/iter",
            "extra": "iterations: 121557\ncpu: 5656.0798555412475 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8432.795350249173,
            "unit": "ns/iter",
            "extra": "iterations: 44454\ncpu: 16786.390898456968 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4267.005123775386,
            "unit": "ns/iter",
            "extra": "iterations: 84508\ncpu: 8534.586630851705 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 92214.05426974934,
            "unit": "ns/iter",
            "extra": "iterations: 7518\ncpu: 92206.39199255241 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 442224.0096685305,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 800173.3701657661 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 128537.28822629766,
            "unit": "ns/iter",
            "extra": "iterations: 3924\ncpu: 243695.5705912285 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1809282.0176768713,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 1809073.0050504955 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 4025787022.2500005,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 4344657354.500005 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 967294223.3750063,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1170095838.7500012 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "423ba8b6bae123bc3329fc9236b2ac185804d007",
          "message": "Better Format for README",
          "timestamp": "2021-10-14T13:01:02Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/94/commits/423ba8b6bae123bc3329fc9236b2ac185804d007"
        },
        "date": 1634228619486,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 17.137990730345436,
            "unit": "ns/iter",
            "extra": "iterations: 41495396\ncpu: 17.13098882102487 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 17.39774669663164,
            "unit": "ns/iter",
            "extra": "iterations: 43314718\ncpu: 17.39574534457318 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.607134333144381,
            "unit": "ns/iter",
            "extra": "iterations: 189666192\ncpu: 3.6067864640842284 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 5.955689339128875,
            "unit": "ns/iter",
            "extra": "iterations: 105434469\ncpu: 5.954543831391614 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 285.96126203501746,
            "unit": "ns/iter",
            "extra": "iterations: 2350743\ncpu: 285.929452092381 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 74182.88826243086,
            "unit": "ns/iter",
            "extra": "iterations: 9755\ncpu: 74179.5773449513 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 29589285.71428574,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 29588347.190476168 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8891728412.000021,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8891108594 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.99999999298484e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.09030465879983,
            "unit": "ns/iter",
            "extra": "iterations: 29581486\ncpu: 23.088999991413587 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 30.216946056177804,
            "unit": "ns/iter",
            "extra": "iterations: 22538188\ncpu: 30.21650209857159 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 522.5477628346827,
            "unit": "ns/iter",
            "extra": "iterations: 1281823\ncpu: 522.4518182307553 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 82806.56850235106,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 82779.15815983883 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 34304645.227272406,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 34298259.409090936 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9844607072.00003,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9843490548.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 523.4758196566954,
            "unit": "ns/iter",
            "extra": "iterations: 1325250\ncpu: 523.4450511224308 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 532.1681561474165,
            "unit": "ns/iter",
            "extra": "iterations: 685250\ncpu: 1018.9862196278722 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 222.72018153135744,
            "unit": "ns/iter",
            "extra": "iterations: 1384444\ncpu: 429.9627525562587 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 77480.0530462829,
            "unit": "ns/iter",
            "extra": "iterations: 9011\ncpu: 77471.51747863732 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 55875.80559711247,
            "unit": "ns/iter",
            "extra": "iterations: 8022\ncpu: 88182.32784841642 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 30244.06344779698,
            "unit": "ns/iter",
            "extra": "iterations: 13716\ncpu: 53348.57626130077 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 33339793.857142773,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 33336151.476190493 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 24428082.925001603,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 38902544.749999836 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12629583.137500335,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 19522149.024999958 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8871996003.999926,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8868257830.999994 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4942119356.250004,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5486895751 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2505430149.249989,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2943266911.750001 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.5690880321798177,
            "unit": "ns/iter",
            "extra": "iterations: 282965072\ncpu: 2.568846327436501 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.590212859090406,
            "unit": "ns/iter",
            "extra": "iterations: 110978253\ncpu: 6.589776088834265 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 108.56681098666822,
            "unit": "ns/iter",
            "extra": "iterations: 6594604\ncpu: 108.55330373135355 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2057.495533432883,
            "unit": "ns/iter",
            "extra": "iterations: 332694\ncpu: 2057.2569418144076 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 51714.38139999509,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51709.560699999456 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 844818.6452054969,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 844761.58082192 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 22.496138893521124,
            "unit": "ns/iter",
            "extra": "iterations: 29911892\ncpu: 22.494909181940233 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 24.580012742022358,
            "unit": "ns/iter",
            "extra": "iterations: 27526247\ncpu: 24.5787527446078 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 384.469990195422,
            "unit": "ns/iter",
            "extra": "iterations: 1880752\ncpu: 384.43980546078984 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6269.106385645313,
            "unit": "ns/iter",
            "extra": "iterations: 111688\ncpu: 6268.735934030526 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 111283.2422499351,
            "unit": "ns/iter",
            "extra": "iterations: 6258\ncpu: 111275.98705656645 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1836836.2096776317,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 1836716.927419315 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 387.8933181152156,
            "unit": "ns/iter",
            "extra": "iterations: 1762811\ncpu: 387.7563800089711 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 414.281569340056,
            "unit": "ns/iter",
            "extra": "iterations: 858998\ncpu: 816.3656702343696 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 226.3058354507001,
            "unit": "ns/iter",
            "extra": "iterations: 1594744\ncpu: 452.3444226785083 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6338.400791564548,
            "unit": "ns/iter",
            "extra": "iterations: 108393\ncpu: 6337.824186063814 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 6569.461861474795,
            "unit": "ns/iter",
            "extra": "iterations: 52034\ncpu: 13039.446438866871 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3230.4919189442867,
            "unit": "ns/iter",
            "extra": "iterations: 99956\ncpu: 7446.098903517335 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 106271.55806502714,
            "unit": "ns/iter",
            "extra": "iterations: 6243\ncpu: 106251.5047252908 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 139338.36573735613,
            "unit": "ns/iter",
            "extra": "iterations: 2726\ncpu: 271892.2853998492 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 84605.8898144369,
            "unit": "ns/iter",
            "extra": "iterations: 5012\ncpu: 164326.51137270988 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1924264.2541436118,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 1924174.1906077955 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 2332317190.4999924,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2574362935.0000086 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 492582594.31250197,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 634252628.0000014 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27d911f51c37246a75a3397edb1841ded14cc16a",
          "message": "Better Format for README (#94)",
          "timestamp": "2021-10-14T18:17:54+02:00",
          "tree_id": "d6de808bb1426a053f3f5852fc41da88e5aa95a0",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/27d911f51c37246a75a3397edb1841ded14cc16a"
        },
        "date": 1634228841469,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 15.6941848014592,
            "unit": "ns/iter",
            "extra": "iterations: 44441045\ncpu: 15.69309099279731 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 15.712423254911432,
            "unit": "ns/iter",
            "extra": "iterations: 45253221\ncpu: 15.71109751502551 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.6535548057421954,
            "unit": "ns/iter",
            "extra": "iterations: 198248442\ncpu: 3.6529414289167534 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.2552703725653975,
            "unit": "ns/iter",
            "extra": "iterations: 112702374\ncpu: 6.254501276077823 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 310.3306098008025,
            "unit": "ns/iter",
            "extra": "iterations: 2289551\ncpu: 310.32410634224823 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 75680.71314085044,
            "unit": "ns/iter",
            "extra": "iterations: 9109\ncpu: 75675.89570754195 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 29238486.619046204,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 29237458.66666665 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 8704668264.999952,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8703305297 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 22.299322950187445,
            "unit": "ns/iter",
            "extra": "iterations: 33170233\ncpu: 22.29500588675396 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 30.596954190394342,
            "unit": "ns/iter",
            "extra": "iterations: 23182933\ncpu: 30.595064524406734 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 520.8937387540017,
            "unit": "ns/iter",
            "extra": "iterations: 1271009\ncpu: 520.8170170313499 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 81126.83333333774,
            "unit": "ns/iter",
            "extra": "iterations: 8904\ncpu: 81127.02549416029 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 33737692.639999755,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 33733736.800000004 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9618283181.999971,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9617532393.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 501.3464572423697,
            "unit": "ns/iter",
            "extra": "iterations: 1332733\ncpu: 501.28147723512706 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 585.4339252561928,
            "unit": "ns/iter",
            "extra": "iterations: 615114\ncpu: 1161.139582256296 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 273.4432457901419,
            "unit": "ns/iter",
            "extra": "iterations: 1098848\ncpu: 585.8827826960581 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 78423.35528089713,
            "unit": "ns/iter",
            "extra": "iterations: 8900\ncpu: 78419.53820224738 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 57837.564402030024,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 90881.39028296796 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 27903.337568965257,
            "unit": "ns/iter",
            "extra": "iterations: 14500\ncpu: 48417.770551724214 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 34384777.14285595,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 34380244.42857162 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 24792494.54999888,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 39778324.04999994 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12548359.289772421,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 21280641.249999903 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8671000872.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8667800371.000006 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4855579935.999984,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5487535734.499998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2412424813.874999,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2951693068.0000005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.5774576285997957,
            "unit": "ns/iter",
            "extra": "iterations: 267095138\ncpu: 2.577264427778532 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 7.222175588184761,
            "unit": "ns/iter",
            "extra": "iterations: 105302199\ncpu: 7.222203099481301 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 109.8440331630111,
            "unit": "ns/iter",
            "extra": "iterations: 6411722\ncpu: 109.83562637307044 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2120.98250928549,
            "unit": "ns/iter",
            "extra": "iterations: 331433\ncpu: 2120.9411917340767 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 51893.29314084737,
            "unit": "ns/iter",
            "extra": "iterations: 13369\ncpu: 51889.93589647704 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 834112.7230955296,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 834041.55018137 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 21.94836085349055,
            "unit": "ns/iter",
            "extra": "iterations: 32844288\ncpu: 21.946867504023952 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 24.987638569527984,
            "unit": "ns/iter",
            "extra": "iterations: 29044535\ncpu: 24.986140456371594 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 385.14263436016074,
            "unit": "ns/iter",
            "extra": "iterations: 1846771\ncpu: 385.1226026399552 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6119.821326311583,
            "unit": "ns/iter",
            "extra": "iterations: 117348\ncpu: 6119.606691208984 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 107500.61106876002,
            "unit": "ns/iter",
            "extra": "iterations: 6559\ncpu: 107492.21359963267 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1758344.0352645696,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 1758216.8589420363 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 393.04606560392773,
            "unit": "ns/iter",
            "extra": "iterations: 1881534\ncpu: 392.79824494268155 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 453.5496050648058,
            "unit": "ns/iter",
            "extra": "iterations: 713788\ncpu: 896.8333833014626 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 231.23651009777754,
            "unit": "ns/iter",
            "extra": "iterations: 1433980\ncpu: 458.32028410437226 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6216.724350875743,
            "unit": "ns/iter",
            "extra": "iterations: 120316\ncpu: 6215.879833106006 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 7668.031951148082,
            "unit": "ns/iter",
            "extra": "iterations: 47244\ncpu: 15298.188912877316 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3540.458213500304,
            "unit": "ns/iter",
            "extra": "iterations: 85536\ncpu: 7231.575453610106 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 103901.98648038867,
            "unit": "ns/iter",
            "extra": "iterations: 6657\ncpu: 103864.67492864523 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 155944.4783112738,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 302842.70496688696 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 65299.401650942695,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 130141.48537735852 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1660407.493765509,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 1660261.8952617971 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1883085947.2500095,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2063054225.9999988 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 634903256.1249927,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 732481177.2499968 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bb63b2da9b0d32e9408b01205ed52a199e56d71",
          "message": "Removed Useless lines",
          "timestamp": "2021-10-14T18:18:48+02:00",
          "tree_id": "c4d688777cd46efe3c6774d0ccc3544a121138e6",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/6bb63b2da9b0d32e9408b01205ed52a199e56d71"
        },
        "date": 1634228928937,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 7.00000043707405e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.00000000020129e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 17.49238590416542,
            "unit": "ns/iter",
            "extra": "iterations: 38061512\ncpu: 17.491786716197716 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 17.645144764292088,
            "unit": "ns/iter",
            "extra": "iterations: 39511470\ncpu: 17.644666194398738 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.093259579403403,
            "unit": "ns/iter",
            "extra": "iterations: 166048733\ncpu: 4.093168112279422 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.7413258131785145,
            "unit": "ns/iter",
            "extra": "iterations: 89936442\ncpu: 7.740855458791672 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 302.83505045817697,
            "unit": "ns/iter",
            "extra": "iterations: 2339958\ncpu: 302.8291507796293 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 83651.11379225999,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 83651.2128858403 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 24907400.181818545,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 24906263.818181816 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11879422368.999996,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11878782292 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.01054198891875,
            "unit": "ns/iter",
            "extra": "iterations: 30965504\ncpu: 23.010051862873 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 25.076489652497415,
            "unit": "ns/iter",
            "extra": "iterations: 28826958\ncpu: 25.074728627280113 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 521.0667390901372,
            "unit": "ns/iter",
            "extra": "iterations: 1348550\ncpu: 521.0483771458221 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 88157.41279558018,
            "unit": "ns/iter",
            "extra": "iterations: 8331\ncpu: 88153.696675069 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 31033463.06896575,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 31032115.79310357 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13285689366.999975,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13284859467.000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 537.6633060150644,
            "unit": "ns/iter",
            "extra": "iterations: 1232995\ncpu: 537.6436125045084 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 592.4315652725851,
            "unit": "ns/iter",
            "extra": "iterations: 598490\ncpu: 1180.6675516717128 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 361.3100599516124,
            "unit": "ns/iter",
            "extra": "iterations: 996804\ncpu: 788.9677830345814 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 89021.44542096464,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 88998.83518023134 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 63634.84860436759,
            "unit": "ns/iter",
            "extra": "iterations: 6592\ncpu: 100622.6300060683 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 32174.28406236375,
            "unit": "ns/iter",
            "extra": "iterations: 18312\ncpu: 63397.43780034952 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 30666419.80000213,
            "unit": "ns/iter",
            "extra": "iterations: 25\ncpu: 30657388.559999958 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 19575852.64583391,
            "unit": "ns/iter",
            "extra": "iterations: 24\ncpu: 32835133.166666556 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10088840.102272652,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 17838769.659090888 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11664856907,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11664111843 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4930368897.499989,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5884586396 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 1972686170.4374948,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3007497221.2499995 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.788702526915554,
            "unit": "ns/iter",
            "extra": "iterations: 258027842\ncpu: 2.7885719324815983 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.8712805633111325,
            "unit": "ns/iter",
            "extra": "iterations: 116673716\ncpu: 5.87104335478612 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 100.49999193350423,
            "unit": "ns/iter",
            "extra": "iterations: 7190228\ncpu: 100.46457219437299 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2209.797673631831,
            "unit": "ns/iter",
            "extra": "iterations: 331074\ncpu: 2209.5617867908786 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 34368.928112243964,
            "unit": "ns/iter",
            "extra": "iterations: 19600\ncpu: 34367.2641326533 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 961060.00795761,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 960959.0716180381 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.885346099625686,
            "unit": "ns/iter",
            "extra": "iterations: 29274172\ncpu: 23.88298589623619 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.94730814833,
            "unit": "ns/iter",
            "extra": "iterations: 26243868\ncpu: 26.945540382995624 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 401.413377186728,
            "unit": "ns/iter",
            "extra": "iterations: 1740650\ncpu: 401.38908223939353 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6364.171222840492,
            "unit": "ns/iter",
            "extra": "iterations: 111241\ncpu: 6363.793664206466 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 103793.79358067655,
            "unit": "ns/iter",
            "extra": "iterations: 6792\ncpu: 103784.63471731637 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1887803.5130887958,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 1887562.913612528 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 430.1341461264522,
            "unit": "ns/iter",
            "extra": "iterations: 1701622\ncpu: 430.1261472877056 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 495.08226784458236,
            "unit": "ns/iter",
            "extra": "iterations: 734874\ncpu: 986.77647596731 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 274.0668392230729,
            "unit": "ns/iter",
            "extra": "iterations: 1280644\ncpu: 554.9794080166041 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6558.07755487345,
            "unit": "ns/iter",
            "extra": "iterations: 99594\ncpu: 6557.203998232665 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9151.202865229638,
            "unit": "ns/iter",
            "extra": "iterations: 39578\ncpu: 18158.76315124555 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4403.115169994428,
            "unit": "ns/iter",
            "extra": "iterations: 84944\ncpu: 8790.324543228342 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 109302.41497851952,
            "unit": "ns/iter",
            "extra": "iterations: 6516\ncpu: 109284.58256599314 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 222646.5568603035,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 419775.16254636116 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 85661.53039652613,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 164509.331407559 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1965103.0754192248,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 1965026.337988821 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1943638006.9999757,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 2218396823.0000057 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 781370975.5624956,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 989394301.0000002 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "94c4feca4ab20675c5844fad1f449dbe09974245",
          "message": "Delete packaging/deb/CXXGraph/usr directory",
          "timestamp": "2021-10-14T16:26:21Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/98/commits/94c4feca4ab20675c5844fad1f449dbe09974245"
        },
        "date": 1634229881287,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.000000212225132e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999894978e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 16.33458829814926,
            "unit": "ns/iter",
            "extra": "iterations: 43288863\ncpu: 16.332199369616152 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 9.000000000813912e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.509265435422847,
            "unit": "ns/iter",
            "extra": "iterations: 40596635\ncpu: 16.50843063716981 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999998009599e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.6447028556718397,
            "unit": "ns/iter",
            "extra": "iterations: 200488279\ncpu: 3.644077926370947 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.075777148851768,
            "unit": "ns/iter",
            "extra": "iterations: 116059909\ncpu: 6.075091227238512 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 312.18939231037285,
            "unit": "ns/iter",
            "extra": "iterations: 2432179\ncpu: 312.12772127380447 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 80146.21697268398,
            "unit": "ns/iter",
            "extra": "iterations: 8932\ncpu: 80141.59326018817 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 33329444.42105432,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 33314740.47368422 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 9417951410.99999,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9416837493 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000661922968e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 25.24857041389899,
            "unit": "ns/iter",
            "extra": "iterations: 27727431\ncpu: 25.247012390004702 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 24.827334649869105,
            "unit": "ns/iter",
            "extra": "iterations: 27535403\ncpu: 24.82579012916562 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 534.2571930000304,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 534.1606060000004 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 77473.5736994228,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 77460.81169408641 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 36419833.65217465,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 36414724.39130435 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 9998955514.99992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9997570485.999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 510.4952526598888,
            "unit": "ns/iter",
            "extra": "iterations: 1464083\ncpu: 510.4828954369395 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 569.0391652626199,
            "unit": "ns/iter",
            "extra": "iterations: 644538\ncpu: 1130.581604187815 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 321.4911367107203,
            "unit": "ns/iter",
            "extra": "iterations: 1110564\ncpu: 693.7707723282952 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 80367.60940696369,
            "unit": "ns/iter",
            "extra": "iterations: 8313\ncpu: 80362.08769397248 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 65448.01132156463,
            "unit": "ns/iter",
            "extra": "iterations: 7022\ncpu: 104547.16106522366 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 29204.873043170694,
            "unit": "ns/iter",
            "extra": "iterations: 12648\ncpu: 45769.48031309328 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 34468924.90909063,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 34458157.31818187 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 26186486.849999823,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 42133499.09999986 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 14763163.117186729,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 22021543.37500005 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9259246520.000032,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9257959125 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4699062614.750005,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5430522989.500002 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2506921671.1874914,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2919370513.25 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.3054957626644312,
            "unit": "ns/iter",
            "extra": "iterations: 318904037\ncpu: 2.292889073712166 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.309383718087005,
            "unit": "ns/iter",
            "extra": "iterations: 138123054\ncpu: 5.309050674480463 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 82.55024933760639,
            "unit": "ns/iter",
            "extra": "iterations: 8074594\ncpu: 82.54704397521434 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 1783.1482870412515,
            "unit": "ns/iter",
            "extra": "iterations: 377855\ncpu: 1783.0929668788324 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 50299.224599996254,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50297.29270000019 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 828951.4823528865,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 828910.4627451046 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 21.51360242286613,
            "unit": "ns/iter",
            "extra": "iterations: 31188157\ncpu: 21.510364495086936 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 24.387669136882483,
            "unit": "ns/iter",
            "extra": "iterations: 30495270\ncpu: 24.386823497545546 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 369.5997583628408,
            "unit": "ns/iter",
            "extra": "iterations: 1878850\ncpu: 369.5433515182205 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 5748.04859599251,
            "unit": "ns/iter",
            "extra": "iterations: 117129\ncpu: 5747.4970929488145 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 103293.23977932375,
            "unit": "ns/iter",
            "extra": "iterations: 7069\ncpu: 103280.73702079442 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1779905.6642156846,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 1779831.4534313085 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 372.63405882130195,
            "unit": "ns/iter",
            "extra": "iterations: 1896149\ncpu: 372.62097176961953 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 484.6169942910898,
            "unit": "ns/iter",
            "extra": "iterations: 830626\ncpu: 958.0092327955293 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 227.51628664496323,
            "unit": "ns/iter",
            "extra": "iterations: 1743760\ncpu: 462.1828577327185 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 5441.092152318604,
            "unit": "ns/iter",
            "extra": "iterations: 125553\ncpu: 5440.666714455058 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9046.501564197495,
            "unit": "ns/iter",
            "extra": "iterations: 38678\ncpu: 17746.339572883488 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4288.008067911608,
            "unit": "ns/iter",
            "extra": "iterations: 80752\ncpu: 8602.105037646099 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 120283.58828035621,
            "unit": "ns/iter",
            "extra": "iterations: 5222\ncpu: 120279.21026426333 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 174830.56747609036,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 339958.7169585896 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 74795.39019053188,
            "unit": "ns/iter",
            "extra": "iterations: 3884\ncpu: 148337.97348094636 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2096737.1000001696,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2096735.1193548671 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 586699812.2500036,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 767054194.0000067 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 361529846.75000256,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 445329700.0000011 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "877dd7bbd24b09d4d7c7742b9a3a700522e4c0c2",
          "message": "Delete packaging/deb/CXXGraph/usr directory (#98)",
          "timestamp": "2021-10-14T18:36:40+02:00",
          "tree_id": "4ad78cc57a3eb466e4317c2ddb1624a1e163670d",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/877dd7bbd24b09d4d7c7742b9a3a700522e4c0c2"
        },
        "date": 1634230010340,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 17.83169802560952,
            "unit": "ns/iter",
            "extra": "iterations: 39821761\ncpu: 17.828942572378956 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 17.476805904216594,
            "unit": "ns/iter",
            "extra": "iterations: 39164148\ncpu: 17.475706071787904 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999997425732e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.921501569172095,
            "unit": "ns/iter",
            "extra": "iterations: 177368692\ncpu: 3.9212063254094462 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.757055485531026,
            "unit": "ns/iter",
            "extra": "iterations: 102950569\ncpu: 6.7566948464364485 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 321.40200516887415,
            "unit": "ns/iter",
            "extra": "iterations: 2122714\ncpu: 321.3902565300839 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 84302.64542503284,
            "unit": "ns/iter",
            "extra": "iterations: 8317\ncpu: 84299.23073223521 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 31786256.68420852,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 31772788.4210526 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 9407065643.00001,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9406222093 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.88811182265828,
            "unit": "ns/iter",
            "extra": "iterations: 29274210\ncpu: 23.881634243930122 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 31.6972371096274,
            "unit": "ns/iter",
            "extra": "iterations: 22174785\ncpu: 31.694002128994697 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 543.929670141107,
            "unit": "ns/iter",
            "extra": "iterations: 1293917\ncpu: 543.8960567022455 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 87546.0808291617,
            "unit": "ns/iter",
            "extra": "iterations: 7188\ncpu: 87538.72941012817 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 36807463.09090792,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 36795062.863636404 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10565317257.999992,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10564658029 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 550.9078804594945,
            "unit": "ns/iter",
            "extra": "iterations: 1241387\ncpu: 550.8643823400764 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 521.5571785380522,
            "unit": "ns/iter",
            "extra": "iterations: 646204\ncpu: 1009.8965574338785 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 295.9054132131332,
            "unit": "ns/iter",
            "extra": "iterations: 1016836\ncpu: 676.4204316133595 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 85333.86275973496,
            "unit": "ns/iter",
            "extra": "iterations: 8037\ncpu: 85329.82792086597 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 62533.64245918951,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 95268.78427053681 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 28144.019924644992,
            "unit": "ns/iter",
            "extra": "iterations: 11280\ncpu: 53518.17960992876 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 36049327.684209906,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 36046270.1052631 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 25203505.199999653,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 40609448.750000164 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12973402.555555679,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 21084218.0277778 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9804750479.000006,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9803833494.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4922054640.2500105,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5736508427.5 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2276420776.875,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3018684076.2500005 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.913893725603717,
            "unit": "ns/iter",
            "extra": "iterations: 254502975\ncpu: 2.9135801300554336 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 7.2488224663969065,
            "unit": "ns/iter",
            "extra": "iterations: 97199137\ncpu: 7.2483885530794065 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 117.45433294485733,
            "unit": "ns/iter",
            "extra": "iterations: 5774710\ncpu: 117.44680096489644 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2273.409737354869,
            "unit": "ns/iter",
            "extra": "iterations: 312056\ncpu: 2271.8473158663724 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 59850.78216082651,
            "unit": "ns/iter",
            "extra": "iterations: 12523\ncpu: 59846.238680827686 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 920450.7700534739,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 920393.1751336863 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.9721562772378,
            "unit": "ns/iter",
            "extra": "iterations: 29006502\ncpu: 23.97078286102904 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 27.56183775885802,
            "unit": "ns/iter",
            "extra": "iterations: 24849332\ncpu: 27.560180370241437 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 423.0526719641425,
            "unit": "ns/iter",
            "extra": "iterations: 1659023\ncpu: 422.5347858347956 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6859.677070547387,
            "unit": "ns/iter",
            "extra": "iterations: 102654\ncpu: 6859.26541586292 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 119118.64564162695,
            "unit": "ns/iter",
            "extra": "iterations: 5977\ncpu: 119112.12949640476 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 2017867.8040345989,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2017708.253602267 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 414.76694471858536,
            "unit": "ns/iter",
            "extra": "iterations: 1678104\ncpu: 414.7195358571437 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 492.2175783528851,
            "unit": "ns/iter",
            "extra": "iterations: 956506\ncpu: 975.6912701018084 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 241.8426244856063,
            "unit": "ns/iter",
            "extra": "iterations: 1614484\ncpu: 482.46103894494973 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6773.200956696368,
            "unit": "ns/iter",
            "extra": "iterations: 99091\ncpu: 6772.6799204771205 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8052.334587353273,
            "unit": "ns/iter",
            "extra": "iterations: 46650\ncpu: 15870.77804930308 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3541.99126116086,
            "unit": "ns/iter",
            "extra": "iterations: 80188\ncpu: 8023.935900633369 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 119687.58917143043,
            "unit": "ns/iter",
            "extra": "iterations: 5781\ncpu: 119677.2911261025 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 178735.37302836686,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 346978.49369085085 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 84148.28395994108,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 160163.87513721606 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1981334.6486485712,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 1981086.2942942588 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1651135193.750008,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1883393657.4999993 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 1185661097.8749983,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 1400552395.4999967 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51516158+oliviacarino@users.noreply.github.com",
            "name": "Olivia",
            "username": "oliviacarino"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6efbd3551321c2e605e9362453da0b2b47632a9b",
          "message": "added prim's algorithm description (#96)",
          "timestamp": "2021-10-14T18:37:56+02:00",
          "tree_id": "3c2e0bb0a7ea3aa3724304a7f54011a78cde88e3",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/6efbd3551321c2e605e9362453da0b2b47632a9b"
        },
        "date": 1634230086226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999923734e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 17.40242978623206,
            "unit": "ns/iter",
            "extra": "iterations: 40430141\ncpu: 17.389003243891732 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 8.000000661922968e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 16.99199372439692,
            "unit": "ns/iter",
            "extra": "iterations: 40192471\ncpu: 16.990803899566163 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 6.999999999646178e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000661922968e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 5.999999075356754e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 5.999999999062311e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 3.651689065082918,
            "unit": "ns/iter",
            "extra": "iterations: 182856157\ncpu: 3.6514768490951055 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 6.370439080931588,
            "unit": "ns/iter",
            "extra": "iterations: 115087166\ncpu: 6.365861880724389 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 305.9531365601911,
            "unit": "ns/iter",
            "extra": "iterations: 2227472\ncpu: 305.9089743889038 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 78328.22093893422,
            "unit": "ns/iter",
            "extra": "iterations: 9351\ncpu: 78318.9608598011 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 33328575.789470818,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 33324493.842105296 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 9030621620.000034,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9029041863 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000010748408e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 25.047339820686044,
            "unit": "ns/iter",
            "extra": "iterations: 27714955\ncpu: 25.042561858751007 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 27.537061576524216,
            "unit": "ns/iter",
            "extra": "iterations: 25480473\ncpu: 27.53448305296364 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 515.519652877259,
            "unit": "ns/iter",
            "extra": "iterations: 1340160\ncpu: 515.3409406339531 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 82749.94716432046,
            "unit": "ns/iter",
            "extra": "iterations: 8252\ncpu: 82743.95140571981 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 36717801.636360615,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 36715309.7727272 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10039632190.000021,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10038554130.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 524.6084427066821,
            "unit": "ns/iter",
            "extra": "iterations: 1361696\ncpu: 524.5612728538531 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 551.2794826549706,
            "unit": "ns/iter",
            "extra": "iterations: 672124\ncpu: 1098.2669090822535 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 319.17794232994197,
            "unit": "ns/iter",
            "extra": "iterations: 1019940\ncpu: 716.6774810282966 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 86353.79413497029,
            "unit": "ns/iter",
            "extra": "iterations: 8491\ncpu: 86350.87810623038 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 68910.09600761061,
            "unit": "ns/iter",
            "extra": "iterations: 7364\ncpu: 108961.97840847331 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 29609.124815201634,
            "unit": "ns/iter",
            "extra": "iterations: 13528\ncpu: 46141.423418095845 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 35782872.20000221,
            "unit": "ns/iter",
            "extra": "iterations: 20\ncpu: 35776326.6500001 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 27751158.805557452,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 44133147.55555561 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 12986829.48611132,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 22455453.333333418 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 8994231951.99995,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 8991285833.999996 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4443864697.750001,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5516210986.499998 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2113272300.750012,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 2968203669.999999 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.5690424882816076,
            "unit": "ns/iter",
            "extra": "iterations: 270409808\ncpu: 2.5669475457783686 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.050140067222295,
            "unit": "ns/iter",
            "extra": "iterations: 121520579\ncpu: 6.049863406263054 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 92.26207907354599,
            "unit": "ns/iter",
            "extra": "iterations: 7043897\ncpu: 92.25894771033649 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2019.2414222747404,
            "unit": "ns/iter",
            "extra": "iterations: 331469\ncpu: 2018.998355804019 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 63360.83097183012,
            "unit": "ns/iter",
            "extra": "iterations: 11998\ncpu: 63352.071011835076 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 905129.025495761,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 905097.9490085139 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 26.135509765211385,
            "unit": "ns/iter",
            "extra": "iterations: 27547535\ncpu: 26.11285797440667 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 28.936457114181522,
            "unit": "ns/iter",
            "extra": "iterations: 24622662\ncpu: 28.935267519003883 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 419.8483801954835,
            "unit": "ns/iter",
            "extra": "iterations: 1650477\ncpu: 419.8044953065046 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6858.950451445255,
            "unit": "ns/iter",
            "extra": "iterations: 99680\ncpu: 6858.303320626053 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 127236.4002458888,
            "unit": "ns/iter",
            "extra": "iterations: 5694\ncpu: 127229.67369160555 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1997318.830409148,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 1997175.3011696085 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 385.53122494939004,
            "unit": "ns/iter",
            "extra": "iterations: 1765175\ncpu: 385.50159955812404 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 547.281346541326,
            "unit": "ns/iter",
            "extra": "iterations: 666166\ncpu: 1066.9280689798068 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 209.84960896290525,
            "unit": "ns/iter",
            "extra": "iterations: 1384012\ncpu: 414.2460159304922 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6302.437776745999,
            "unit": "ns/iter",
            "extra": "iterations: 112016\ncpu: 6300.8761069848515 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9010.583404275343,
            "unit": "ns/iter",
            "extra": "iterations: 44638\ncpu: 17813.08687665192 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 3781.09601098683,
            "unit": "ns/iter",
            "extra": "iterations: 76460\ncpu: 8062.557193303629 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 127721.95834061473,
            "unit": "ns/iter",
            "extra": "iterations: 5713\ncpu: 127703.28916506453 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 178206.54401268082,
            "unit": "ns/iter",
            "extra": "iterations: 2522\ncpu: 348171.1625694 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 74634.81728751349,
            "unit": "ns/iter",
            "extra": "iterations: 3812\ncpu: 147431.33604407127 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 1873387.4791666812,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 1873357.205357148 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1764449791.7499962,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1988408015.99999 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 547265670.7500007,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 672542028.2500039 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "id": "e7c5d6a3ceee070c88dac1f28a9d129058e02cf4",
          "message": "Update benchmark.yml",
          "timestamp": "2021-10-14T16:44:55Z",
          "url": "https://github.com/ZigRazor/CXXGraph/pull/100/commits/e7c5d6a3ceee070c88dac1f28a9d129058e02cf4"
        },
        "date": 1634230587303,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.004418085091583,
            "unit": "ns/iter",
            "extra": "iterations: 39285572\ncpu: 17.975346470709397 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 6.999999868639861e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999998009599e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 18.150277192519184,
            "unit": "ns/iter",
            "extra": "iterations: 38113222\ncpu: 18.14975774024038 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.000000001866624e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.243395325374849,
            "unit": "ns/iter",
            "extra": "iterations: 165645026\ncpu: 4.242976411498163 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.850256339647748,
            "unit": "ns/iter",
            "extra": "iterations: 88577987\ncpu: 7.850124309101764 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 299.7739570154501,
            "unit": "ns/iter",
            "extra": "iterations: 2349124\ncpu: 299.7701807141726 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 83379.34629273038,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 83378.27431391439 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 24828399.363635544,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 24828430.409090925 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 11959691746.000032,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11958822049 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 23.139279074926215,
            "unit": "ns/iter",
            "extra": "iterations: 29829147\ncpu: 23.137817584927944 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 25.3010335018795,
            "unit": "ns/iter",
            "extra": "iterations: 27823365\ncpu: 25.299495226404172 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 524.8417216877317,
            "unit": "ns/iter",
            "extra": "iterations: 1316011\ncpu: 524.8189270454442 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 87453.10578512342,
            "unit": "ns/iter",
            "extra": "iterations: 7865\ncpu: 87446.57050222537 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 31478591.93103386,
            "unit": "ns/iter",
            "extra": "iterations: 29\ncpu: 31471071.379310418 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 13607277535.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 13606274710.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 535.2229100394402,
            "unit": "ns/iter",
            "extra": "iterations: 1309618\ncpu: 535.192133889422 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 657.9113233678902,
            "unit": "ns/iter",
            "extra": "iterations: 540802\ncpu: 1307.3008235916268 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 357.42496121868453,
            "unit": "ns/iter",
            "extra": "iterations: 978564\ncpu: 792.5189042311007 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 87277.79043194542,
            "unit": "ns/iter",
            "extra": "iterations: 7964\ncpu: 87273.67290306381 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 71759.67429577572,
            "unit": "ns/iter",
            "extra": "iterations: 6248\ncpu: 115438.58706786137 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 28836.111413042177,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 45457.19634894122 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 27991275.08695698,
            "unit": "ns/iter",
            "extra": "iterations: 23\ncpu: 27986479.608695693 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 21087792.52272861,
            "unit": "ns/iter",
            "extra": "iterations: 22\ncpu: 34896625.81818158 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 10038931.965908982,
            "unit": "ns/iter",
            "extra": "iterations: 44\ncpu: 16568735.522727273 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 11639173900.000004,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 11638287557.999994 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 5628011811.500002,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 6280901475 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2620394223.8125,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3116193165 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.773551642346428,
            "unit": "ns/iter",
            "extra": "iterations: 250059610\ncpu: 2.77338934504458 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 5.8145829629288155,
            "unit": "ns/iter",
            "extra": "iterations: 119272826\ncpu: 5.8128804879663125 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 100.4842424779692,
            "unit": "ns/iter",
            "extra": "iterations: 7027723\ncpu: 100.4524727283653 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2153.5114239821837,
            "unit": "ns/iter",
            "extra": "iterations: 329351\ncpu: 2153.3553321532067 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 35226.986031517605,
            "unit": "ns/iter",
            "extra": "iterations: 19544\ncpu: 35226.694177241385 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 1027620.4821173371,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1027566.852646644 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 23.464224563579034,
            "unit": "ns/iter",
            "extra": "iterations: 29666752\ncpu: 23.462569478452025 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 26.836933706282746,
            "unit": "ns/iter",
            "extra": "iterations: 26216497\ncpu: 26.835800984395068 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 399.94748896318265,
            "unit": "ns/iter",
            "extra": "iterations: 1772256\ncpu: 399.9200815232136 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6378.017605384842,
            "unit": "ns/iter",
            "extra": "iterations: 113488\ncpu: 6377.799097701975 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 101828.18985126524,
            "unit": "ns/iter",
            "extra": "iterations: 6858\ncpu: 101821.9819189268 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 1883115.730158602,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 1882931.6084656033 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 400.3923388838298,
            "unit": "ns/iter",
            "extra": "iterations: 1726798\ncpu: 400.2380040977694 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 482.9470988734875,
            "unit": "ns/iter",
            "extra": "iterations: 581774\ncpu: 958.4257254535272 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 262.8885540399112,
            "unit": "ns/iter",
            "extra": "iterations: 1310624\ncpu: 531.3117675244893 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 6486.553599078691,
            "unit": "ns/iter",
            "extra": "iterations: 100748\ncpu: 6486.052130067089 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 9316.266075855638,
            "unit": "ns/iter",
            "extra": "iterations: 35488\ncpu: 18429.027558611957 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4763.4638374889455,
            "unit": "ns/iter",
            "extra": "iterations: 71552\ncpu: 9655.561829159404 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 107199.27158033507,
            "unit": "ns/iter",
            "extra": "iterations: 6024\ncpu: 107180.25049800746 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 857262.0592486479,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 1512324.3526011817 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 81532.78910368384,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 159317.35017574913 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2042064.4742856503,
            "unit": "ns/iter",
            "extra": "iterations: 350\ncpu: 2041882.131428565 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 3680418596.499976,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 3911556898.5000014 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 515918902.4999975,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 643338395.4999993 ns\nthreads: 4"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zigrazor@gmail.com",
            "name": "ZigRazor",
            "username": "ZigRazor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "233235269c2bc810b028e015735f652c448eb4af",
          "message": "Update benchmark.yml (#100)",
          "timestamp": "2021-10-14T18:55:25+02:00",
          "tree_id": "eab663b565c79514d1d848c71aaa001d75da896c",
          "url": "https://github.com/ZigRazor/CXXGraph/commit/233235269c2bc810b028e015735f652c448eb4af"
        },
        "date": 1634231149531,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "NodeCreation",
            "value": 9.000000318337698e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.99999999995249e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeCreationDestruction_new_delete",
            "value": 18.72305045693144,
            "unit": "ns/iter",
            "extra": "iterations: 36637226\ncpu: 18.71930363941855 ns\nthreads: 1"
          },
          {
            "name": "NodeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetData",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999998009599e-7 ns\nthreads: 1"
          },
          {
            "name": "BM_EdgeCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "EdgeCreationDestruction_new_delete",
            "value": 19.290963735099343,
            "unit": "ns/iter",
            "extra": "iterations: 36688256\ncpu: 19.288895007710366 ns\nthreads: 1"
          },
          {
            "name": "EdgeGetId",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "NodeGetNodePair",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.999999998593466e-7 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation",
            "value": 8.000000093488779e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 8.000000000230045e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge",
            "value": 4.108624177073281,
            "unit": "ns/iter",
            "extra": "iterations: 168722788\ncpu: 4.108093039572103 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/1",
            "value": 7.160771553639634,
            "unit": "ns/iter",
            "extra": "iterations: 97654701\ncpu: 7.1600292340253 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/16",
            "value": 336.91740082492834,
            "unit": "ns/iter",
            "extra": "iterations: 2078798\ncpu: 336.8893533667049 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/256",
            "value": 85192.7126070953,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 85185.07490820068 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/4096",
            "value": 34000415.333335035,
            "unit": "ns/iter",
            "extra": "iterations: 18\ncpu: 33996987.61111115 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX/65536",
            "value": 9567864321.000002,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9556754038.000002 ns\nthreads: 1"
          },
          {
            "name": "GraphCreation_TS",
            "value": 7.999999525054591e-7,
            "unit": "ns/iter",
            "extra": "iterations: 1000000000\ncpu: 7.999999986907369e-7 ns\nthreads: 1"
          },
          {
            "name": "AddEdge_TS",
            "value": 26.772293313960645,
            "unit": "ns/iter",
            "extra": "iterations: 25366989\ncpu: 26.76118880329082 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/1",
            "value": 26.83412989441751,
            "unit": "ns/iter",
            "extra": "iterations: 25782078\ncpu: 26.83164378759531 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/16",
            "value": 581.7510066330707,
            "unit": "ns/iter",
            "extra": "iterations: 1224627\ncpu: 581.6610159664941 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/256",
            "value": 91520.02312213818,
            "unit": "ns/iter",
            "extra": "iterations: 7828\ncpu: 91510.64588656105 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/4096",
            "value": 37117158.85714013,
            "unit": "ns/iter",
            "extra": "iterations: 21\ncpu: 37112444.904761806 ns\nthreads: 1"
          },
          {
            "name": "AddEdgeX_TS/65536",
            "value": 10482279126.99997,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 10477708714.000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:1",
            "value": 585.5467417081431,
            "unit": "ns/iter",
            "extra": "iterations: 1197560\ncpu: 585.4791250542778 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:2",
            "value": 601.1437432353405,
            "unit": "ns/iter",
            "extra": "iterations: 526630\ncpu: 1196.461654292381 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/16/threads:4",
            "value": 308.12452942812115,
            "unit": "ns/iter",
            "extra": "iterations: 955752\ncpu: 648.391168420263 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:1",
            "value": 93631.85215662752,
            "unit": "ns/iter",
            "extra": "iterations: 7048\ncpu: 93570.26858683382 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:2",
            "value": 68730.15724589022,
            "unit": "ns/iter",
            "extra": "iterations: 5962\ncpu: 108313.23532371676 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/256/threads:4",
            "value": 33019.54294082524,
            "unit": "ns/iter",
            "extra": "iterations: 15108\ncpu: 55737.34160709575 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:1",
            "value": 35264409.631580696,
            "unit": "ns/iter",
            "extra": "iterations: 19\ncpu: 35263613.94736829 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:2",
            "value": 25123597.468752477,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 40805031.56249987 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/4096/threads:4",
            "value": 13379426.039061394,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 22246006.781249966 ns\nthreads: 4"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:1",
            "value": 9241968015.999987,
            "unit": "ns/iter",
            "extra": "iterations: 1\ncpu: 9240522049 ns\nthreads: 1"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:2",
            "value": 4755035591.750015,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 5676501414 ns\nthreads: 2"
          },
          {
            "name": "BM_AddEdgeX_MT_TS/65536/threads:4",
            "value": 2567512385.124999,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 3038516584.2499995 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdge",
            "value": 2.8124431002463597,
            "unit": "ns/iter",
            "extra": "iterations: 252665858\ncpu: 2.812204508453998 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/1",
            "value": 6.4828440415644595,
            "unit": "ns/iter",
            "extra": "iterations: 109730506\ncpu: 6.482257222070991 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/16",
            "value": 104.98831834239641,
            "unit": "ns/iter",
            "extra": "iterations: 6869145\ncpu: 104.98232531122814 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/256",
            "value": 2337.9706719053897,
            "unit": "ns/iter",
            "extra": "iterations: 294223\ncpu: 2337.812292037007 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/4096",
            "value": 66833.98230166048,
            "unit": "ns/iter",
            "extra": "iterations: 11470\ncpu: 66833.97994768938 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX/65536",
            "value": 1002150.546003002,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1002080.8567119008 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdge_TS",
            "value": 26.203259548974444,
            "unit": "ns/iter",
            "extra": "iterations: 25625079\ncpu: 26.199979910305636 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/1",
            "value": 29.735280567536844,
            "unit": "ns/iter",
            "extra": "iterations: 23896047\ncpu: 29.73335426566552 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/16",
            "value": 420.8000040666545,
            "unit": "ns/iter",
            "extra": "iterations: 1622958\ncpu: 420.71529022932566 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/256",
            "value": 6925.133353271189,
            "unit": "ns/iter",
            "extra": "iterations: 103657\ncpu: 6924.664287023497 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/4096",
            "value": 129772.06692265703,
            "unit": "ns/iter",
            "extra": "iterations: 5469\ncpu: 129748.3015176444 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_TS/65536",
            "value": 2114611.610429383,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2114312.7883435283 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:1",
            "value": 462.8080530860776,
            "unit": "ns/iter",
            "extra": "iterations: 1514674\ncpu: 462.73765972083385 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:2",
            "value": 575.7529346199269,
            "unit": "ns/iter",
            "extra": "iterations: 786814\ncpu: 1146.0721822438277 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/16/threads:4",
            "value": 278.04728685919264,
            "unit": "ns/iter",
            "extra": "iterations: 1437688\ncpu: 558.1279206614992 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:1",
            "value": 7075.1592048717985,
            "unit": "ns/iter",
            "extra": "iterations: 89344\ncpu: 7073.260655443973 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:2",
            "value": 8115.96995192406,
            "unit": "ns/iter",
            "extra": "iterations: 42016\ncpu: 16193.006735529303 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/256/threads:4",
            "value": 4444.919005275494,
            "unit": "ns/iter",
            "extra": "iterations: 88336\ncpu: 9176.596665006395 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:1",
            "value": 132794.99338279542,
            "unit": "ns/iter",
            "extra": "iterations: 4987\ncpu: 132647.21916984665 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:2",
            "value": 149145.745114684,
            "unit": "ns/iter",
            "extra": "iterations: 2354\ncpu: 290622.4379779003 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/4096/threads:4",
            "value": 81851.4580118303,
            "unit": "ns/iter",
            "extra": "iterations: 3888\ncpu: 158493.89403292298 ns\nthreads: 4"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:1",
            "value": 2027188.6666668667,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2027161.7117116447 ns\nthreads: 1"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:2",
            "value": 1102249277.5000217,
            "unit": "ns/iter",
            "extra": "iterations: 2\ncpu: 1305594440.5000064 ns\nthreads: 2"
          },
          {
            "name": "RemoveEdgeX_MT_TS/65536/threads:4",
            "value": 393152067.68750954,
            "unit": "ns/iter",
            "extra": "iterations: 4\ncpu: 518973647.2500016 ns\nthreads: 4"
          }
        ]
      }
    ]
  }
}