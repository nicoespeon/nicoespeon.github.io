// The dirty version (MP3s inside).
$( function () {
  var dirtyRepo = new GitGraph( {
    elementId: "dirty-repo",
    orientation: "vertical",
    template: "blackarrow",
    author: "Nicolas Carlo <nicolas.carlo@metidia.com>"
  } );

  var master = dirtyRepo.branch( "master" );
  master.commit( "Add README.md" );
  master.commit( {
    color: "red",
    dotColor: "red",
    message: "Add .mp3 files"
  } );
  master.commit( "Update README.md" );

  var develop = master.branch( "develop" );
  develop.commit( "Start another feature here." );
  develop.commit( "Add some JS files" );
  develop.commit( {
    color: "red",
    dotColor: "red",
    message: "Update some tests + add more mp3 files"
  } );
  develop.commit( {
    color: "red",
    dotColor: "red",
    message: "Few mp3 again \\o/"
  } );

  master.commit( "Hotfix this typo!" );

  develop.commit();
  develop.merge( master, "Feature over!" );
  master.commit( "Edit some files here" );
} );

// The clean version (without MP3s).
$( function () {
  var cleanRepo = new GitGraph( {
    elementId: "clean-repo",
    orientation: "vertical",
    template: "blackarrow",
    author: "Nicolas Carlo <nicolascarlo.espeon@gmail.com>"
  } );

  var master = cleanRepo.branch( "master" );
  master.commit( "Add README.md" );
  master.commit( "Update README.md" );

  var develop = master.branch( "develop" );
  develop.commit( "Start another feature here." );
  develop.commit( "Add some JS files" ).commit( "Update some tests" );

  master.commit( "Hotfix this typo!" );

  develop.commit();
  develop.merge( master, "Feature over!" );
  master.commit( "Edit some files here" );
} );
